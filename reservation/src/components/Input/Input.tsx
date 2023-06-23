import React, {useState} from 'react';
import {TextInput, Text, StyleSheet, View} from 'react-native';

import {styles} from './style';

interface InputProps {
  title: string;
  hint: string;
  value: string;
  handleChange: (text: string) => void;
  isShowError?: boolean;
  errorMessage?: string;
  width: number;
}

export const Input: React.FC<InputProps> = ({
  title,
  hint, width,
  handleChange,
  value,
  isShowError = false,
  errorMessage = '',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.column}>
      <Text style={{fontSize: 16}}>{title}</Text>
      <TextInput
        onBlur={handleBlur}
        onChangeText={handleChange}
        onFocus={handleFocus}
        placeholder={hint}
        style={[styles.input, 
          isFocused ? focusedStyle.inputFocused : null,
          {width: width}
        ]}
        value={value}
      />
      {isShowError && <Text>{errorMessage}</Text>}
    </View>
  );
};

const focusedStyle = StyleSheet.create({
  inputFocused: {
    borderColor: '#5C6EF8',
  },
});
