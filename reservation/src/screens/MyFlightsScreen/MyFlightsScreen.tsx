import React from 'react';
import {
    View,
    Text
} from 'react-native'; 
import styles from './style';

export const MyFlightsScreen = () => {
    return (
        <>
            <View style={styles.column}>
                <Text style={styles.screenTitle}>My flights</Text>
            </View>
        </>
    )
}
