import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

interface AppProps {
    description: string;
}

const App: React.FC<AppProps> = ({ description }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={styles.container}>
        <View style={styles.checkboxContainer}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={styles.label}>{description}</Text>
        </View>
        <Text>Is CheckBox selected: {toggleCheckBox ? 'Si' : 'No'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        marginRight: 8,
    },
    label: {
        fontSize: 16,
    },
});

export default App;