import React from 'react';

import {Text, View} from 'react-native';

import {Formik} from 'formik';
import {Input} from '../../components/Input/Input';
import {CheckBox} from '../../components/Checkbox/Checkbox';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/Navigator';
import PrimaryButton from '../../components/primaryButton/primaryButton';
import styles from './style';
import {initialValues, signUpSchema} from './SignUpScreenSchema';
export const SignUpScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const onSubmit = async (values: any) => {
    try {
      console.log(values);
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={values => onSubmit(values)}>
        {({
          handleChange,
          handleSubmit,
          errors,
          touched,
          values: {name, email, password, privacyTerms, updateProducts},
          setFieldValue,
        }) => (
          <View style={[styles.column, {backgroundColor: '#ffffff'}]}>
            <Text style={styles.screenTitle}>Sign Up</Text>
            <Input
              title="First name"
              hint="John"
              handleChange={handleChange('name')}
              value={name}
            />
            <Input
              errorMessage={errors.email}
              handleChange={handleChange('email')}
              hint="example@gmail.com"
              isShowError={!!errors.email && !!touched.email}
              title="Email"
              value={email}
            />
            <Input
              errorMessage={errors.password}
              handleChange={handleChange('password')}
              hint="********"
              isShowError={!!errors.password && !!touched.password}
              title="Password"
              value={password}
            />
            <CheckBox
              description="I agree with the Terms and Privacy Policy"
              onChange={() => setFieldValue('privacyTerms', !privacyTerms)}
            />
            <CheckBox
              description="Subscribe for select product updates."
              onChange={() => setFieldValue('updateProducts', !updateProducts)}
            />
            <PrimaryButton
              isDisabled={Object.values(errors).length >= 1}
              title="Sign up"
              onPress={() => {
                handleSubmit();
              }}
            />
          </View>
        )}
      </Formik>
    </>
  );
};
