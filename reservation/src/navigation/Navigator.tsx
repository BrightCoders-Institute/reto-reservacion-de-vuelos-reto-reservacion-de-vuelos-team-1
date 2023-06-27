import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignUpScreen} from '../screens/SignUpScreen/SignUpScreen';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen/LoginScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  SignUpScreen: undefined;
  Undefined: undefined;
  LoginScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="SignUpScreen">
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{title: 'SignUp', headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Home', headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{title: 'Login', headerShown: false}}
      />
    </Stack.Navigator>
  );
};
