import React from 'react';

import {
    Text,
    View
} from 'react-native';

import { Input } from '../../components/Input/Input';
import { CheckBox } from '../../components/Checkbox/Checkbox';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/Navigator';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { AnchorButton } from '../../components/AnchorButton/AnchorButton';

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
              />
              <View style={[styles.checboxContainer, {width:wp('80%')}]}>
                        <CheckBox
                            description='I agree with the Terms and Privacy Policy'
                            onChange={() => {}} //TODO: Del onchange
                        />
                        <CheckBox
                            description='Subscribe to recieve product updates.'
                            onChange={() => {}} //TODO: Del onchange
                        />
              </View>
              <PrimaryButton
                isActive={Object.values(errors).length >= 1} //TODO
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
                        <AnchorButton title={'Log In'} onPress={()=>{navigation.navigate('HomeScreen')}} />
                    </View>
            </View>
          )}
          </Formik>
    </>
  );
};
