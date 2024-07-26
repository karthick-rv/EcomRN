import {ParamListBase, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import ImageButton from '../components/Button';
import Textbox from '../components/Textbox';

const Signin_page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputMode, setInputMode] = useState('email');
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const ContinueButton = () => {
    if (inputMode === 'email') {
      setInputMode('password');
    } else if (inputMode === 'password' && password != '') {
    }
  };

  return (
    <View style={styles.itemContainer}>
      <Text style={{fontWeight: '700', fontSize: 32, color: 'black'}}>
        Sign In
      </Text>
      {inputMode === 'email' ? (
        <Textbox value={email} onChangeText={setEmail} placeholder="Email" />
      ) : (
        <Textbox
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
        />
      )}
      <TouchableOpacity onPress={ContinueButton} style={styles.continueButton}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
          Continue
        </Text>
      </TouchableOpacity>
      {inputMode === 'email' ? (
        <Text style={styles.createOneText}>
          Don't have an account?{' '}
          <Text
            style={styles.boldClickableText}
            onPress={() => navigation.navigate('CreateAccount')}>
            Create one
          </Text>
        </Text>
      ) : (
        <Text style={styles.createOneText}>
          Forget password{' '}
          <Text
            style={styles.boldClickableText}
            onPress={() => navigation.navigate('ForgotPwd')}>
            Reset
          </Text>
        </Text>
      )}
      {inputMode === 'email' && (
        <View style={styles.buttonContainer}>
          <ImageButton
            imageSource={require('../assets/Apple.png')}
            buttonText="Continue with Apple"
          />
          <ImageButton
            imageSource={require('../assets/Google.png')}
            buttonText="Continue with Google"
          />
          <ImageButton
            imageSource={require('../assets/Facebook.png')}
            buttonText="Continue with Facebook"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  createOneText: {
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    marginVertical: 12,
  },
  continueButton: {
    backgroundColor: '#8E6CEF',
    padding: 8,
    borderRadius: 100,
    marginTop: 5,
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    paddingHorizontal: 10,

    backgroundColor: 'white',
    paddingTop: 40,
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
    marginTop: 20,
  },
  buttonImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  boldClickableText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: 'black',
  },
});

export default Signin_page;
