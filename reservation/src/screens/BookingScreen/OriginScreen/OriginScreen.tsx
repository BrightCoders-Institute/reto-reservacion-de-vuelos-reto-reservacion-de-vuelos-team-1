import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {PrimaryButton} from '../../../components/PrimaryButton/PrimaryButton';
import {DropDown} from '../../../components/DropDown/DropDown';
import CardFlight from '../../../components/CardFlight/CardFlight';
import {placesData} from '../../../assets/places_data';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../../navigation/Navigator';

import {useSelector} from 'react-redux';

import {RootState} from '../../../types/types';

const OriginScreen = () => {
  const originCityValue = useSelector(
    (state: RootState) => state.counter.originCountry,
  );
  const originCountryValue = useSelector(
    (state: RootState) => state.counter.originCity,
  );
  const destinationCityValue = useSelector(
    (state: RootState) => state.counter.destinationCity,
  );
  const destinationCountryValue = useSelector(
    (state: RootState) => state.counter.destinationCountry,
  );

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      {originCountryValue ? (
        <CardFlight
          originCountry={originCountryValue}
          originCity={originCityValue}
          destinationCity={destinationCityValue}
          destinationCountry={destinationCountryValue}
        />
      ) : (
        <View />
      )}
      <Text style={styles.header}>Where are you now?</Text>
      <DropDown width={wp('70%')} data={placesData} />
      <PrimaryButton
        title="Next"
        onPress={() => {
          navigation.navigate('DestinationScreen');
        }}
        isActive={originCountryValue ? true : false}
        width={wp('70%')}
      />
    </View>
  );
};

export default OriginScreen;
