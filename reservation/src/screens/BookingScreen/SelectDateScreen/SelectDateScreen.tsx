import React from 'react';
import {View, Text} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import CardFlight from '../../../components/CardFlight/CardFlight';
import {Calendar} from '../../../components/Calendar/Calendar';
import {PrimaryButton} from '../../../components/PrimaryButton/PrimaryButton';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../../navigation/Navigator';
import {useSelector} from 'react-redux';
import {RootState} from '../../../types/types';

export const SelectDateScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const originCityValue = useSelector(
    (state: RootState) => state.counter.originCountry,
  );
  const originCountryValue = useSelector(
    (state: RootState) => state.counter.originCity,
  );
  const destinationCityValue = useSelector(
    (state: RootState) => state.counter.destinationCity,
  );
  const destinationCountryValue = useSelector(
    (state: RootState) => state.counter.destinationCountry,
  );
  const dateValue = useSelector(
    (state: RootState) => state.counter.selectedDate,
  );
  return (
    <View style={styles.container}>
      <CardFlight
        originCountry={originCountryValue}
        originCity={originCityValue}
        destinationCity={destinationCityValue}
        destinationCountry={destinationCountryValue}
      />
      <Text style={styles.header}>Select date</Text>
      <Calendar />
      <PrimaryButton
        title="Next"
        onPress={() => {
          navigation.navigate('PassengersScreen');
        }}
        isActive={dateValue ? true : false}
        width={wp('70%')}
      />
    </View>
  );
};
