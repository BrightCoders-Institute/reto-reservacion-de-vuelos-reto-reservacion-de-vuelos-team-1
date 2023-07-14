import React from 'react';
import {View, Text} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import CardFlight from '../../../components/CardFlight/CardFlight';
import {PrimaryButton} from '../../../components/PrimaryButton/PrimaryButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../../navigation/Navigator';
import {useSelector} from 'react-redux';
import {RootState} from '../../../types/types';

export const RequestReceivedScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const {
    originCountry,
    originCity,
    destinationCity,
    destinationCountry,
    passengers,
    selectedDate,
  } = useSelector((state: RootState) => state.counter);

  return (
    <View style={styles.container}>
      <CardFlight
        originCountry={originCountry}
        originCity={originCity}
        destinationCity={destinationCity}
        destinationCountry={destinationCountry}
        passengers={passengers}
        date={selectedDate}
      />
      <Text style={styles.header}>Your request was received.</Text>

      <PrimaryButton
        title="Finish"
        onPress={() => {
          navigation.navigate('MyFlightsScreen');
        }}
        isActive={true}
        width={wp('70%')}
      />
    </View>
  );
};
