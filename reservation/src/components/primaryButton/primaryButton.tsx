import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  isDisabled?: boolean;
}

const primaryButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  isDisabled = false,
}) => {
  const buttonStyles = [
    isDisabled ? styles.buttonInActive : styles.buttonActive,
  ];

  return (
    <View>
      <TouchableOpacity
        style={buttonStyles}
        onPress={onPress}
        disabled={isDisabled}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default primaryButton;
