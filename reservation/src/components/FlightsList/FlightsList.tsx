import React from 'react';

import {View, FlatList, StyleSheet} from 'react-native';
import Flights from '../../interfaces/Flights';

interface FlightsListProps {
  data: Flights[];
}

const FlightsList: React.FC<FlightsListProps> = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <Flight flight={item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default FlightsList;
