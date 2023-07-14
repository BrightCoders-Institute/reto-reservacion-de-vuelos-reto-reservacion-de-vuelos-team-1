import React from 'react';
import {View, Text} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {placesData} from '../../../assets/places_data';
import {useNavigation} from '@react-navigation/native';

import CardFlight from '../../../components/CardFlight/CardFlight';
import {PrimaryButton} from '../../../components/PrimaryButton/PrimaryButton';

import {styles} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../../navigation/Navigator';

import {useSelector} from 'react-redux';

import {RootState} from '../../../types/types';
import {DropDownDestination} from '../../../components/DropDownDestination/DropDownDestination';

export const DestinationScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const originCityValue = useSelector(
    (state: RootState) => state.counter.originCountry,
  );
  const originCountryValue = useSelector(
    (state: RootState) => state.counter.originCity,
  );
  const destinationCountryValue = useSelector(
    (state: RootState) => state.counter.destinationCountry,
  );

  return (
    <View style={styles.container}>
      {originCountryValue ? (
        <CardFlight
          originCity={originCityValue}
          originCountry={originCountryValue}
        />
      ) : (
        <View />
      )}
      <Text style={styles.header}>Where will you be flying to?</Text>
      <DropDownDestination width={wp('70%')} data={placesData} />
      <PrimaryButton
        title="Next"
        onPress={() => {
          navigation.navigate('SelectDateScreen');
        }}
        isActive={destinationCountryValue ? true : false}
        width={wp('70%')}
      />
    </View>
  );
};
