import React from 'react';
import {View, Text} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../../navigation/Navigator';

import CardFlight from '../../../components/CardFlight/CardFlight';
import {PrimaryButton} from '../../../components/PrimaryButton/PrimaryButton';

import styles from './style';
import {PassengersSelector} from '../../../components/PassengersSelector/PassengersSelector';
import {useSelector} from 'react-redux';
import {RootState} from '../../../types/types';

export const PassengersScreen = () => {
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
  const passengersValue = useSelector(
    (state: RootState) => state.counter.passengers,
  );
  const dateValue = useSelector(
    (state: RootState) => state.counter.selectedDate,
  );

  return (
    <View style={styles.column}>
      {originCountryValue ? (
        <CardFlight
          originCountry={originCountryValue}
          originCity={originCityValue}
          destinationCity={destinationCityValue}
          destinationCountry={destinationCountryValue}
          date={dateValue}
        />
      ) : (
        <View />
      )}
      <Text style={styles.header}>How many passengers?</Text>
      <PassengersSelector />
      <PrimaryButton
        title="Next"
        onPress={() => {
          navigation.navigate('RequestReceivedScreen');
        }}
        isActive={passengersValue ? true : false}
        width={wp('70%')}
      />
    </View>
  );
};
