import React, {useState} from 'react';
import {TextInput, Text, StyleSheet} from 'react-native';

import {styles} from './style';

interface InputProps {
  title: string;
  hint: string;
  value: string;
  handleChange: (text: string) => void;
  isShowError?: boolean;
  errorMessage?: string;
}

export const Input: React.FC<InputProps> = ({
  title,
  hint,
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
    <>
      <Text>{title}</Text>
      <TextInput
        onBlur={handleBlur}
        onChangeText={handleChange}
        onFocus={handleFocus}
        placeholder={hint}
        style={[styles.input, isFocused ? focusedStyle.inputFocused : null]}
        value={value}
      />
      {isShowError && <Text>{errorMessage}</Text>}
    </>
  );
};

const focusedStyle = StyleSheet.create({
  inputFocused: {
    borderColor: '#5C6EF8',
  },
});
