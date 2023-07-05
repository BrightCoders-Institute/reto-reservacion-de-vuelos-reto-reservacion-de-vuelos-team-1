import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {PrimaryButton} from '../../components/PrimaryButton/primaryButton';
import {DropDown} from '../../components/DropDown/DropDown';

export const BookingScreen = () => {
  return (
    <View style={styles.column}>
      <Text style={styles.header}>Where are now?</Text>
      <DropDown />
      <PrimaryButton title="Next" onPress={() => {}} isActive={true} />
    </View>
  );
};
