import React from 'react';
import { TouchableOpacity, Text,View } from 'react-native';
import styles from './styles'

interface ButtonProps {
  title: string;
  onPress: () => void;
  isActive: boolean;
}

const primaryButton: React.FC<ButtonProps> = ({ title, onPress, isActive }) => {

    const buttonStyles=[isActive? styles.buttonActive: styles.buttonInActive];

  return (
    <View>
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    </View>
  );
};

export default primaryButton;
