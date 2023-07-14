import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import CardFlight from '../../../components/CardFlight/CardFlight';
import {PrimaryButton} from '../../../components/PrimaryButton/PrimaryButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../../navigation/Navigator';
//Redux
import {useSelector} from 'react-redux';
import {RootState} from '../../../types/types';

export const RequestReceivedScreen = () => {
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

  return (
    <View style={styles.container}>
      <CardFlight
        originCountry={originCountryValue}
        originCity={originCityValue}
        destinationCity={destinationCityValue}
        destinationCountry={destinationCountryValue}
        passengers={passengersValue}
      />
      <Text style={styles.header}>Your request was received.</Text>

      <PrimaryButton
        title="Finish"
        onPress={() => {
          navigation.navigate('MyFlightsScreen');
        }}
        isActive={true}
        width={wp('70%')}
      />
    </View>
  );
};
