import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {PrimaryButton} from '../../../components/PrimaryButton/PrimaryButton';
import {DropDown} from '../../../components/DropDown/DropDown';
import CardFlight from '../../../components/CardFlight/CardFlight';
import {placesData} from '../../../assets/places_data';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../../navigation/Navigator';

import Flights from '../../../interfaces/Flights';

export const OriginScreen = ({recievedProp}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

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
      <Text style={styles.header}>Where are you now?</Text>
      <DropDown width={wp('70%')} data={placesData} />
      <PrimaryButton
        title="Next"
        onPress={() => {
          navigation.navigate('DestinationScreen');
        }}
        isActive={true}
        width={wp('70%')}
      />
    </View>
  );
};
