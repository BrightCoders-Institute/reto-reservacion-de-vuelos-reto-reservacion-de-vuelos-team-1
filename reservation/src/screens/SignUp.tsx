import React from 'react';

import { 
    Text,
    Button, 
    TextInput,
    View
} from 'react-native';

import { Formik } from 'formik';
import { Input } from '../components/Input/Input';

export const SignUp = () => {
    return (
    <Input></Input>
    // <Formik
    // initialValues={{ email: '' }}
    // onSubmit={values => console.log(values)}
    // >

    // {({ handleChange, handleBlur, values }) => (

    // <View>
    //     <TextInput
    //     onChangeText={handleChange('email')}
    //     onBlur={handleBlur('email')}
    //     value={values.email}
    //     />

    //     <Button onPress={() => {}} title="Submit" />
    // </View>
    // )}
    // </Formik>
    )
}
