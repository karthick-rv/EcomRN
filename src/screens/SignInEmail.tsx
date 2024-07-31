import {ParamListBase, useNavigation} from '@react-navigation/native';
import React, {createContext, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import ImageButton from '../components/Button';
import Textbox from '../components/Textbox';
import {EmailContext} from '../context/EmailContext';

export const emailContext = createContext('');

const SignInEmail = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [inputMode, setInputMode] = useState('email');
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const onContinuePress = () => {
    if (email == '') {
      setEmailError('Please enter valid email');
      return;
    }
    setEmailError('');
    navigation.navigate('SignInPassword', {email: email});
  };

  return (
    <View style={styles.itemContainer}>
      <Text style={{fontWeight: '500', fontSize: 32, color: 'black'}}>
        Sign in
      </Text>
      <Textbox
        value={email}
        onChangeText={setEmail}
        placeholder="Email Address"
        fieldError={emailError}
      />
      <TouchableOpacity onPress={onContinuePress} style={styles.continueButton}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: '400'}}>
          Continue
        </Text>
      </TouchableOpacity>

      <Text style={styles.createOneText}>
        Don't have an account ?{' '}
        <Text
          style={styles.boldClickableText}
          onPress={() => navigation.navigate('CreateAccount')}>
          Create One
        </Text>
      </Text>
      <View style={styles.buttonContainer}>
        <ImageButton
          imageSource={require('../assets/Apple.png')}
          buttonText="Continue With Apple"
        />
        <ImageButton
          imageSource={require('../assets/Google.png')}
          buttonText="Continue With Google"
        />
        <ImageButton
          imageSource={require('../assets/Facebook.png')}
          buttonText="Continue With Facebook"
        />
      </View>
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

export default SignInEmail;
