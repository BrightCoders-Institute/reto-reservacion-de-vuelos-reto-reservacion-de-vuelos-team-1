import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import {AddButton} from '../../components/AddButton/AddButton';
import FlightsList from '../../components/FlightsList/FlightsList';
import Flights from '../../interfaces/Flights';
import {FIREBASE_AUTH} from '../../../config/firebase-config';
import {AnchorButton} from '../../components/AnchorButton/AnchorButton';

//TODO: Retrieve from backend
const flightsData: Flights[] = [
  {
    id: '1',
    date: '05/07/2023',
    destinationCountry: 'GUA',
    destinationCity: 'Belice',
    originCountry: 'MX',
    originCity: 'CDMX',
    passengers: '2',
  },
  {
    id: '2',
    date: '09/08/2023',
    destinationCountry: 'BEG',
    destinationCity: 'Serbia',
    originCountry: 'AMS',
    originCity: 'Netherlands',
    passengers: '2',
  },
];

export const MyFlightsScreen = () => {
  const handleLogOut = () => {
    FIREBASE_AUTH.signOut();
  };

  return (
    <View style={styles.column}>
      <Text style={styles.screenTitle}>My Flights</Text>
      <AnchorButton title="Logout" onPress={handleLogOut} />
      <FlightsList data={flightsData} />
      {/* //TODO: Navigate to bookings */}
      <AddButton onPress={() => {}} />
    </View>
  );
};
