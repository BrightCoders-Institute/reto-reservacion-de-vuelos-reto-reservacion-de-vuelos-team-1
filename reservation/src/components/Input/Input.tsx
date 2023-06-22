import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';

export const Input = () => {
  const [text, onChangeText] = useState('');
  return (
    <View>
        {/* <Image 
        source={require('../assets/images/icons/search.png')}
        style = {styles.icon1}/> */}
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Email"
        />
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Contraseña"
        />
        {/* <Image 
        source={require('../assets/images/icons/micro.png')}
        style = {styles.icon2}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      backgroundColor: 'dimgray',
      padding: 10,
      borderRadius: 10,
      textAlign: 'center',
    },
    icon1: {
        width: 20,
        height: 25,
        tintColor:'white',
        position: 'absolute',
        top: 20,
        zIndex: 1,
        left: 25,
    },
    icon2: {
      width: 25,
      height: 25,
      tintColor:'white',
      position: 'absolute',
      top: 20,
      zIndex: 1,
      left: 315,
      marginRight: 1,
  },
  });