import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface CheckBoxProps {
    description: string;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ description }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <>
        <View style={styles.checkboxContainer}>
            <BouncyCheckbox
                size={25}
                onPress={() => {setToggleCheckBox(!toggleCheckBox)}}
                bounceEffectIn={0.8}
            />
            <Text style={styles.label}>{description}</Text>
        </View>
        <Text>Is CheckBox selected: {toggleCheckBox ? 'Si' : 'No'}</Text>
        </>
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
