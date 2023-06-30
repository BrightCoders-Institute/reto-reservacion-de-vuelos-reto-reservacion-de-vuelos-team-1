import React,{useState} from 'react';

import {
    Text,
    View,
    ActivityIndicator
} from 'react-native';

import { Input } from '../../components/Input/Input';
import { CheckBox } from '../../components/Checkbox/Checkbox';
import { PrimaryButton } from '../../components/PrimaryButton/primaryButton';

import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParams } from '../../navigation/Navigator';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { AnchorButton } from '../../components/AnchorButton/AnchorButton';

import styles from './style';
import {initialValues, signUpSchema} from './SignUpScreenSchema';

import { FIREBASE_AUTH } from '../../../config/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const SignUpScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const [isLoading, setIsLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const onSubmit = async (values: any) => {
    setIsLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, values.email, values.password);
      console.log(response);
      navigation.navigate('HomeScreen');
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  };

  return (
    isLoading ?
    <>
      <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
    </>
    :
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
                width={wp('80%')}
              />
              <Input
                errorMessage={errors.email}
                handleChange={handleChange('email')}
                hint="example@gmail.com"
                isShowError={!!errors.email && !!touched.email}
                title="Email"
                value={email}
                width={wp('80%')}
              />
              <Input
                errorMessage={errors.password}
                handleChange={handleChange('password')}
                hint="********"
                isShowError={!!errors.password && !!touched.password}
                title="Password"
                value={password}
                width={wp('80%')}
                isPassword={true}
              />
              <View style={[styles.checboxContainer, {width:wp('80%')}]}>
                        <CheckBox
                            description='I agree with the Terms and Privacy Policy'
                            handleChange={() => handleChange(!privacyTerms)} //TODO: Handle Change
                        />
                        <CheckBox
                            description='Subscribe to recieve product updates.'
                            handleChange={() => handleChange(!updateProducts)}
                        />
              </View>
              <PrimaryButton
                isActive={Object.values(errors).length >= 1}
                title="Sign up"
                onPress={() => {
                  handleSubmit();
                }}
                width={wp('70%')}
              />
              <Text style={styles.textOr}>or</Text>
                    <PrimaryButton
                        title='Sign Up with Google'
                        onPress={()=>{navigation.navigate('HomeScreen')}}
                        isActive={false}
                        width={wp('70%')}
                        isGoogle={true}
                    />
                    <View style={[styles.row, {height: wp('20%')}]}>
                        <Text style={[styles.textAccount, {marginRight: wp('2%')}]}>Already have an account?</Text>
                        <AnchorButton title={'Log In'} onPress={()=>{navigation.navigate('LoginScreen')}} />
                    </View>
            </View>
          )}
          </Formik>
    </>
  );
};
