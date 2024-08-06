import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Textbox from '../components/common/Textbox';

import BackButton from '../components/common/BackButton';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import CurvedButton from '../components/common/CurvedButton';
import AuthService from '../services/AuthService';
import {UIUtils} from '../utilities/UIUtils';

export default function CreateAccount() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
      }}>
      <BackButton onPress={() => navigation.goBack()} />
      <Text style={styles.title}>Create Account</Text>

      <Textbox
        placeholder={'Firstname'}
        value={firstName}
        onChangeText={setFirstName}></Textbox>

      <Textbox
        placeholder={'Lastname'}
        value={lastName}
        onChangeText={setLastName}></Textbox>

      <Textbox
        placeholder={'Email Address'}
        value={email}
        onChangeText={setEmail}></Textbox>

      <Textbox
        placeholder={'Password'}
        value={password}
        onChangeText={setPassword}></Textbox>

      <View style={{marginTop: 50}}>
        <CurvedButton
          buttonText={'Continue'}
          loading={loading}
          onPress={async () => {
            setLoading(true);
            console.log(
              `FirstName - ${firstName} | LastName - ${lastName} | Email - ${email} | password - ${password}`,
            );
            const response = await AuthService.signUp(email, password);
            setLoading(false);
            if (response.user == null) {
              if (response.error != null) {
                UIUtils.showSnackBar(response.error);
              }
            } else {
              navigation.navigate('SignInEmail');
            }
          }}
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
    marginTop: 10,
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
