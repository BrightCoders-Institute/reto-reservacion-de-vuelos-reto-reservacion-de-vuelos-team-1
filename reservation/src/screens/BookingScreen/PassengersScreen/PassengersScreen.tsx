import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import CardFlight from '../../../components/CardFlight/CardFlight';
import Calendar from '../../../components/Calendar/Calendar';
import {PrimaryButton} from '../../../components/PrimaryButton/PrimaryButton';

import styles from './style';
import Flights from '../../../interfaces/Flights';
import {PassengersSelector} from '../../../components/PassengersSelector/PassengersSelector';

export const PassengersScreen = () => {
  const [flight, setflight] = useState<Flights>({
    id: '',
    originCountry: '',
    originCity: '',
    destinationCountry: '',
    destinationCity: '',
    date: '',
    passengers: '',
  });

  return (
    <View style={styles.column}>
      <CardFlight flight={flight} />
      <Text style={styles.header}>How many passengers?</Text>
      <PassengersSelector />
      <PrimaryButton
        title="Next"
        onPress={() => {}}
        isActive={true}
        width={wp('70%')}
      />
    </View>
  );
};
