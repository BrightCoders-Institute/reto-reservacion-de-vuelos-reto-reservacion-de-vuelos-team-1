import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

import { styles } from './style';

interface InputProps {
  title: string;
  hint: string;
}

export const Input: React.FC<InputProps> = ({title, hint}) => {
  const [text, onChangeText] = useState('');
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
        style={[
          styles.input, 
          isFocused ? focusedStyle.inputFocused : null,
        ]}
        onChangeText={onChangeText}
        value={text}
        placeholder={hint}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </>
  );
};

const focusedStyle = StyleSheet.create({
  inputFocused: {
    borderColor: '#5C6EF8'
  }
});