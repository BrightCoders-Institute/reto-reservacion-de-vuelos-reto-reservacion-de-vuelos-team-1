import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SignUpScreen} from '../screens/SignUpScreen/SignUpScreen';
import {OriginScreen} from '../screens/BookingScreen/OriginScreen/OriginScreen';
import {DestinationScreen} from '../screens/BookingScreen/DestinationScreen.tsx/DestinationScreen';
import {LoginScreen} from '../screens/LoginScreen/LoginScreen';
import {MyFlightsScreen} from '../screens/MyFlightsScreen/MyFlightsScreen';
import {SelectDateScreen} from '../screens/BookingScreen/SelectDateScreen/SelectDateScreen';
import {PassengersScreen} from '../screens/BookingScreen/PassengersScreen/PassengersScreen';

import {onAuthStateChanged, User} from 'firebase/auth';
import {FIREBASE_AUTH} from '../../config/firebase-config';

const Stack = createStackNavigator();

export type RootStackParams = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  MyFlightsScreen: undefined;
  OriginScreen: undefined;
  DestinationScreen: undefined;
  SelectDateScreen: undefined;
  PassengersScreen: undefined;
};

export const Navigation = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, user => {
      setUser(user);
    });
  }, []);

  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      {user ? (
        <Stack.Group screenOptions={{headerShown: true}}>
          <Stack.Screen
            name="MyFlightsScreen"
            component={MyFlightsScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="OriginScreen" component={OriginScreen} />
          <Stack.Screen
            name="DestinationScreen"
            component={DestinationScreen}
          />
          <Stack.Screen name="SelectDateScreen" component={SelectDateScreen} />
          <Stack.Screen name="PassengersScreen" component={PassengersScreen} />
        </Stack.Group>
      ) : (
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};
