import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import styles from './style';

const CardFlight = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer1}>
          <Text style={styles.title}>BEG</Text>
          <Text style={styles.text}>Serbia</Text>
          <Text style={styles.text2}>September 3, 2023</Text>
      </View>
        <Ionicons style= {styles.icon} name='airplane-sharp' size={30} color='#6170f7' />
      <View style={styles.subcontainer2}>
          <Text style={styles.title}>AMS</Text>
          <Text style={styles.text}>Netherlands</Text>
          <Text style={styles.text2}>3 Passengers</Text>
      </View>
    </View>
  )
}

export default CardFlight