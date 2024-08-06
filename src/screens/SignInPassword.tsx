import {ParamListBase, useNavigation} from '@react-navigation/native';
import React, {createContext, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import ImageButton from '../components/common/Button';
import Textbox from '../components/common/Textbox';
import Config from '../constants/config';
import AppModal from '../utilities/AppModal';
import {CommonActions} from '@react-navigation/native';
import AuthService from '../services/AuthService';
import LoadingSpinner from '../components/common/LoadingSpinner';
import {UIUtils} from '../utilities/UIUtils';

const SignInPassword = ({route}: any) => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginErrorModalVisible, setLoginErrorModalVisible] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const [isLoading, setLoading] = useState(false);

  const {email} = route.params;

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const onContinuePress = async () => {
    if (password == '') {
      setPasswordError('Please enter password to continue');
      return;
    }
    setPasswordError('');
    console.log(`Email : ${email} | Password: ${password}`);
    setLoading(true);

    const response = await AuthService.signIn(email, password);
    setLoading(false);
    if (response.user == null) {
      console.log(`Login Failed`);
      setLoginErrorMessage('Login Failed. Please try again');
      setLoginErrorModalVisible(true);
      return;
    }
    UIUtils.showSnackBar('Login Successful');
    navigation.dispatch(
      CommonActions.reset({
        index: 0, // The index of the route you want to show (0 is the first route)
        routes: [{name: 'BottomTabs'}], // Array of routes you want to set in the stack
      }),
    );
  };

  return (
    <View style={styles.itemContainer}>
      <Text style={{fontWeight: '500', fontSize: 32, color: 'black'}}>
        Sign in
      </Text>

      <Textbox
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        fieldError={passwordError}
      />

      <TouchableOpacity onPress={onContinuePress} style={styles.continueButton}>
        {isLoading ? (
          <LoadingSpinner loading={isLoading} />
        ) : (
          <Text style={{color: 'white', fontSize: 16, fontWeight: '400'}}>
            Continue
          </Text>
        )}
      </TouchableOpacity>
      <Text style={styles.createOneText}>
        Forgot password ?{' '}
        <Text
          style={styles.boldClickableText}
          onPress={() => navigation.navigate('ForgotPwd')}>
          Reset
        </Text>
      </Text>

      <AppModal
        message={loginErrorMessage}
        modalVisible={loginErrorModalVisible}
        setModalVisible={setLoginErrorModalVisible}></AppModal>
    </View>
  );
};

const styles = StyleSheet.create({
  createOneText: {
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    color: 'black',
    marginVertical: 12,
  },
  continueButton: {
    backgroundColor: '#8E6CEF',
    padding: 8,
    borderRadius: 100,
    marginTop: 15,
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: 'white',
    paddingTop: 100,
  },
  input: {
    height: 40,
    marginTop: 24,
    backgroundColor: '#F4F4F4',
    padding: 10,
    borderRadius: 4,
    marginBottom: 12,
  },
  buttonContainer: {
    marginTop: 50,
  },
  buttonImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  boldClickableText: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default SignInPassword;
