import {View, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import styles from './style';
import Flights from '../../interfaces/Flights';

interface CardFlightProps {
  flight: Flights;
}

const CardFlight: React.FC<CardFlightProps> = ({flight}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer1}>
        <Text style={styles.title}>{flight.originCountry}</Text>
        <Text style={styles.text}>{flight.originCity}</Text>
        <Text style={styles.text2}>{flight.date}</Text>
      </View>
      <Ionicons
        style={styles.icon}
        name="airplane-sharp"
        size={30}
        color="#6170f7"
      />
      <View style={styles.subcontainer2}>
        <Text style={styles.title}>{flight.destinationCountry}</Text>
        <Text style={styles.text}>{flight.destinationCity}</Text>
        <Text style={styles.text2}>{`${flight.passengers} passengers`}</Text>
      </View>
    </View>
  );
};

export default CardFlight;
