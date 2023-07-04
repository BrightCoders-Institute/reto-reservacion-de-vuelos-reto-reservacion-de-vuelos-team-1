import React,{useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignUpScreen} from '../screens/SignUpScreen/SignUpScreen';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen/LoginScreen';

import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../config/firebase-config';

const Stack = createStackNavigator();

export type RootStackParams = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
}

export const Navigation = () => {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, [])
  

  return (
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown: false}}>
        {user ? (
          //Logged User
          <Stack.Group>
            <Stack.Screen
              name='HomeScreen'
              component={HomeScreen}
            />
          </Stack.Group>
        ) : 
          //Not Logged User
        (
          <Stack.Group>
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
            />
            <Stack.Screen
              name="SignUpScreen"
              component={SignUpScreen}
            />
          </Stack.Group>
        )
        }
      </Stack.Navigator>
  );
};
