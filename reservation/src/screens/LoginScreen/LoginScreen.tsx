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
import {initialValues, loginScreenSchema} from './LoginScreenSchema';
export const LoginScreen = () => {
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
          validationSchema={loginScreenSchema}
          onSubmit={values => onSubmit(values)}>
          {({
            handleChange,
            handleSubmit,
            errors,
            touched,
            values: {email, password},
            setFieldValue,
          }) => (
            <View style={[styles.column, {backgroundColor: '#ffffff'}]}>
              <Text style={styles.screenTitle}>Login</Text>

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

              <PrimaryButton
                isActive={Object.values(errors).length >= 1} //TODO
                title="Login"
                onPress={() => {
                  handleSubmit();
                }}
                width={wp('70%')}
              />
              <Text style={styles.textOr}>or</Text>
                    <PrimaryButton
                        title='Login with Google'
                        onPress={()=>{navigation.navigate('HomeScreen')}}
                        isActive={false}
                        width={wp('70%')}
                        isGoogle={true}
                    />
                    <View style={[styles.row, {height: wp('20%')}]}>
                        <Text style={[styles.textAccount, {marginRight: wp('2%')}]}>Don't have an account?</Text>
                        <AnchorButton title={'Sign Up'} onPress={()=>{navigation.navigate('SignUpScreen')}} />
                    </View>
            </View>
          )}
          </Formik>
    </>
  );
};
