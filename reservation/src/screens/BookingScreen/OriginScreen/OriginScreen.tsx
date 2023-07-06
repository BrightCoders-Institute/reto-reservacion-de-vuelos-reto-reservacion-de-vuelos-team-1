import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {PrimaryButton} from '../../../components/PrimaryButton/primaryButton';
import {DropDown} from '../../../components/DropDown/DropDown';
import CardFlight from '../../../components/CardFlight/CardFlight';
import {placesData} from '../../../assets/places_data';

export const OriginScreen = () => {
  const [origin, setOrigin] = useState('');

  return (
    <View style={styles.container}>
      {/* TODO: Adapt card to recieve dropdown info */}
      <CardFlight
        id=""
        originCountry=""
        originCity=""
        destinationCountry=""
        destinationCity=""
        date=""
        passengers=""
      />
      <Text style={styles.header}>Where are you now?</Text>
      <DropDown width={wp('70%')} data={placesData} />
      <PrimaryButton
        title="Next"
        onPress={() => {}}
        isActive={true}
        width={wp('70%')}
      />
    </View>
  );
};
