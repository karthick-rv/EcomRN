import {ParamListBase, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import ImageButton from '../components/Button';
import Textbox from '../components/Textbox';

const SignInPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const onContinuePress = () => {};

  return (
    <View style={styles.itemContainer}>
      <Text style={{fontWeight: '500', fontSize: 32, color: 'black'}}>
        Sign in
      </Text>

      <Textbox
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
      />

      <TouchableOpacity onPress={onContinuePress} style={styles.continueButton}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: '400'}}>
          Continue
        </Text>
      </TouchableOpacity>
      <Text style={styles.createOneText}>
        Forgot password ?{' '}
        <Text
          style={styles.boldClickableText}
          onPress={() => navigation.navigate('ForgotPwd')}>
          Reset
        </Text>
      </Text>
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
