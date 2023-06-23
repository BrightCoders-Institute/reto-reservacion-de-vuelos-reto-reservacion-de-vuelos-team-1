import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignUpScreen} from '../screens/SignUpScreen/SignUpScreen';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  SignUpScreen: undefined;
  Undefined: undefined;
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
        options={{title: 'Home', headerShown: true}}
      />
    </Stack.Navigator>
  );
};
