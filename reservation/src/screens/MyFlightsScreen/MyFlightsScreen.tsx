import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import styles from './style';
import {AddButton} from '../../components/AddButton/AddButton';
import FlightsList from '../../components/FlightsList/FlightsList';
import {FIREBASE_AUTH} from '../../../config/firebase-config';
import {AnchorButton} from '../../components/AnchorButton/AnchorButton';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/Navigator';

import {getDocs, query, where} from 'firebase/firestore';
import {FIREBASE_FLIGHTS} from '../../../config/firebase-config';

import {useSelector} from 'react-redux';
import {RootState} from '../../types/types';

import Flights from '../../interfaces/Flights';
import Snackbar from 'react-native-snackbar';

import {useDispatch} from 'react-redux';

import {saveUserid} from '../../redux/slices/booking.slice';

export const MyFlightsScreen = () => {
  const [refresh, setRefresh] = useState(false);

  const isFocused = useIsFocused();

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const userIdValue = useSelector((state: RootState) => state.counter.userId);

  const [flights, setFlights] = useState<Flights[] | undefined>([]);

  const fetchFlights = async () => {
    try {
      const q = query(FIREBASE_FLIGHTS, where('uid', '==', userIdValue));
      const querySnapshot = await getDocs(q);
      const dataArray = querySnapshot.docs.map(doc => ({
        ...doc.data(),
      }));
      setFlights(dataArray);
    } catch (error) {
      Snackbar.show({
        text: error.message,
        backgroundColor: 'red',
      });
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchFlights();
    userIdValue;
  }, []);

  useEffect(() => {
    if (isFocused) {
      setRefresh(true);
    }
  }, [isFocused]);

  useEffect(() => {
    if (refresh) {
      fetchFlights();
      setRefresh(false);
    }
  }, [refresh]);

  const handleLogOut = () => {
    FIREBASE_AUTH.signOut();
  };

  console.log('User flights:', flights);

  console.log(userIdValue);

  return (
    <View style={styles.column}>
      <Text style={styles.screenTitle}>My Flights</Text>
      <AnchorButton
        title="LogOut"
        onPress={() => {
          handleLogOut();
        }}
      />
      {flights ? (
        <FlightsList data={flights} />
      ) : (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#5C6EF8" />
        </View>
      )}
      <AddButton
        onPress={() => {
          navigation.navigate('OriginScreen');
        }}
      />
    </View>
  );
};
