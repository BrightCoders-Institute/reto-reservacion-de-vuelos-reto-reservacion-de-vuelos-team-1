import React from 'react';
import {
    View,
    Text
} from 'react-native'; 
import styles from './style';
import CardFlight from '../../components/CardFlight/CardFlight';

export const MyFlightsScreen = () => {
    return (
        <>
            <View style={styles.column}>
                <Text style={styles.screenTitle}>My flights</Text>
                <CardFlight />
            </View>
        </>
    )
}
