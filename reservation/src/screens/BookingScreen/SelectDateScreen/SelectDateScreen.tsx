import React from 'react';
import {View, Text} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import CardFlight from '../../../components/CardFlight/CardFlight';
import Calendar from '../../../components/Calendar/Calendar';
import {PrimaryButton} from '../../../components/PrimaryButton/PrimaryButton';

import {styles} from './styles';

export const SelectDateScreen = () => {
  return (
    <>
      <CardFlight
        id=""
        originCountry=""
        originCity=""
        destinationCountry=""
        destinationCity=""
        date=""
        passengers=""
      />
      <Text style={styles.header}>Select Date</Text>

      <View style={styles.container}>
        <Calendar />
        <PrimaryButton
          title="Next"
          onPress={() => {}}
          isActive={true}
          width={wp('70%')}
        />
      </View>
    </>
  );
};
