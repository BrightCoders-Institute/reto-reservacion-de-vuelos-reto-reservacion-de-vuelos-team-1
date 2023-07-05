import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import {AddButton} from '../../components/AddButton/AddButton';
import FlightsList from '../../components/FlightsList/FlightsList';
import Flights from '../../interfaces/Flights';

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
  return (
    <View style={styles.column}>
      <Text style={styles.screenTitle}>My Flights</Text>
      <FlightsList data={flightsData} />
      {/* //TODO: Navigate to bookings */}
      <AddButton onPress={() => {}} />
    </View>
  );
};
