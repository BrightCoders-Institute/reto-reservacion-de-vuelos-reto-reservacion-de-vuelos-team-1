import React from 'react';

import {FlatList} from 'react-native';
import Flights from '../../interfaces/Flights';
import CardFlight from '../CardFlight/CardFlight';

interface FlightsListProps {
  data: Flights[];
}

const FlightsList: React.FC<FlightsListProps> = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <CardFlight flight={item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default FlightsList;
