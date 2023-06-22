import React from 'react';

import { 
    Text,
    Button, 
    TextInput,
    View
} from 'react-native';

import { Formik } from 'formik';
import { Input } from '../../components/Input/Input';
import { CheckBox } from '../../components/Checkbox';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/Navigator';

import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SignUpScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()

    return (
        <>
                <View style={[styles.column, {backgroundColor: '#ffffff'}]}>
                    <Text style={styles.screenTitle}>Sign Up</Text>
                        <Input title='First name' hint='John'/>
                        <Input title='Email' hint='example@gmail.com'/>
                        <Input title='Password' hint='********'/>
                    <CheckBox 
                        description='I agree with the Terms and Conditions'
                    />
                    <Button 
                        title='LogIn'
                        onPress={() => {
                            navigation.navigate('HomeScreen');
                        }}
                    />
                </View>       
        </>
    )
}

