import {View, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import styles from './style';

interface CardFlightProps {
  id?: string;
  originCountry?: string;
  originCity?: string;
  destinationCountry?: string;
  destinationCity?: string;
  passengers?: string;
  date?: string;
}

const CardFlight: React.FC<CardFlightProps> = ({
  id,
  originCountry,
  originCity,
  destinationCountry,
  destinationCity,
  passengers,
  date,
}) => {
  console.log(passengers);
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer1}>
        <Text style={styles.title}>{originCountry}</Text>
        <Text style={styles.text}>{originCity}</Text>
        <Text style={styles.text2}>{date}</Text>
      </View>
      <Ionicons
        style={styles.icon}
        name="airplane-sharp"
        size={30}
        color="#6170f7"
      />
      <View style={styles.subcontainer2}>
        <Text style={styles.title}>{destinationCountry}</Text>
        <Text style={styles.text}>{destinationCity}</Text>
        {passengers ? (
          <Text style={styles.text2}>{`${passengers} passengers`}</Text>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

export default CardFlight;
