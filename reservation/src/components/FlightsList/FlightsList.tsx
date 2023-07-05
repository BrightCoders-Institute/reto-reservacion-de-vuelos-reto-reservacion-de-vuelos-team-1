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
      renderItem={({item}) => (
        <CardFlight
          id={item.id}
          originCountry={item.originCountry}
          originCity={item.originCity}
          destinationCountry={item.destinationCountry}
          destinationCity={item.destinationCity}
          passengers={item.passengers}
          date={item.date}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default FlightsList;
