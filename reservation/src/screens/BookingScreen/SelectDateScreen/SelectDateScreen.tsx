import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import CardFlight from '../../../components/CardFlight/CardFlight';
import Calendar from '../../../components/Calendar/Calendar';
import {PrimaryButton} from '../../../components/PrimaryButton/PrimaryButton';

import styles from './styles';
import Flights from '../../../interfaces/Flights';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../../navigation/Navigator';

export const SelectDateScreen = () => {
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
      <CardFlight flight={flight} />
      <Text style={styles.header}>Select date</Text>
      <Calendar />
      <PrimaryButton
        title="Next"
        onPress={() => {
          navigation.navigate('PassengersScreen');
        }}
        isActive={true}
        width={wp('70%')}
      />
    </View>
  );
};
