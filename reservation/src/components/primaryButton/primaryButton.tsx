import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import styles from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  isActive: boolean;
  width?: number;
  isGoogle?: boolean;
}

const PrimaryButton: React.FC<ButtonProps> = ({ title, onPress, isActive, width, isGoogle }) => {

  const buttonStyles=[isActive? styles.buttonActive: styles.buttonInActive];

  const googleLogo = '../../assets/google-logo.png';

  return (
    <View>
    <TouchableOpacity style={[buttonStyles, {width: width}]} onPress={onPress}>
      <View style={ styles.row }>
        {isGoogle? <Image style={styles.icon} source={require(googleLogo)} /> : null}
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
