import React from 'react';
import {View, Text} from 'react-native';
import { AnchorButton } from '../../components/AnchorButton/AnchorButton';
import styles from './style';

import { FIREBASE_AUTH } from '../../../config/firebase-config';

export const HomeScreen = () => {

  const handleLogOut = () => {
    FIREBASE_AUTH.signOut();
  }

  return (
    <>
      <View style={styles.column}>
        <Text style={styles.screenTitle}>Home Screen</Text>
        <AnchorButton 
          title='Logout'
          onPress={handleLogOut} 
        />
        <Text>Hi {FIREBASE_AUTH.currentUser?.email}!</Text>
      </View>
    </>
  );
};
