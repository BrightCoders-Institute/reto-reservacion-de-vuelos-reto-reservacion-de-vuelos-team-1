import React from 'react'
import { 
    View,
    Text 
} from 'react-native'
import styles from './style'

export const HomeScreen = () => {
    return (
        <>
            <View style={styles.column}>
                <Text style={styles.screenTitle}>Home Screen</Text>
            </View>
        </>
    )
}
