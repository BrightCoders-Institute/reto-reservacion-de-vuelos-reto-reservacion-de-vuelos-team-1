import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {placesData} from '../../../assets/places_data';

import CardFlight from '../../../components/CardFlight/CardFlight';
import {DropDown} from '../../../components/DropDown/DropDown';
import {PrimaryButton} from '../../../components/PrimaryButton/primaryButton';
import Flights from '../../../interfaces/Flights';

import {styles} from './styles';

export const DestinationScreen = () => {
  const [destination, setDestination] = useState('');

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
    <View style={styles.container}>
      {/* TODO: Adapt card to recieve dropdown info */}
      <CardFlight flight={flight} />
      <Text style={styles.header}>Where will you be flying to?</Text>
      <DropDown width={wp('70%')} data={placesData} />
      <PrimaryButton
        title="Next"
        onPress={() => {}}
        isActive={true}
        width={wp('70%')}
      />
    </View>
  );
};
