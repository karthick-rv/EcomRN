import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Textbox from '../components/Textbox';

import BackButton from '../components/BackButton';

export default function CreateAccount() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
      }}>
      <BackButton />
      <Text style={styles.title}>Create Account</Text>

      <Textbox
        placeholder={'Firstname'}
        value={firstName}
        onChange={setFirstName}></Textbox>

      <Textbox
        placeholder={'Lastname'}
        value={lastName}
        onChange={setLastName}></Textbox>

      <Textbox
        placeholder={'Email Address'}
        value={email}
        onChange={setEmail}></Textbox>

      <Textbox
        placeholder={'Password'}
        value={password}
        onChange={setPassword}></Textbox>

      <View style={{marginTop: 50}}>
        <Button
          onPress={() => {
            console.log('Continue Clicked');
            console.log(
              `FirstName - ${firstName} | LastName - ${lastName} | Email - ${email} | password - ${password}`,
            );
          }}
          title="Continue"
          color="#8E6CEF"
        />
      </View>

      <View style={styles.forgetPasswordContainer}>
        <Text style={styles.forgetPasswordText}>Forgot Password ? </Text>
        <Text
          onPress={() => {
            console.log('Reset clicked!');
          }}
          style={styles.resetText}>
          Reset
        </Text>
      </View>
    </SafeAreaView>
  );
}

var styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#272727',
    marginTop: 20,
  },

  forgetPasswordContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 30,
  },

  forgetPasswordText: {
    color: '#272727',
    marginEnd: 2,
  },

  resetText: {
    color: '#272727',
    fontWeight: 'bold',
  },
});
