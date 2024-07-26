/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';

import {} from 'react-native/Libraries/NewAppScreen';
import ForgotPwd from './src/pages/forgotPwd';
import CreateAccount from './src/pages/CreateAccount';
import SignInPassword from './src/pages/sign_in_password';
import SignInEmail from './src/pages/sign_in_email';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignInEmail"
          component={SignInEmail}
          options={{headerTitle: '', headerShown: false}}
        />
        <Stack.Screen
          name="SignInPassword"
          component={SignInPassword}
          options={{
            headerTitle: '',
            headerShown: false,
            presentation: 'modal',
            animationTypeForReplace: 'push',
          }}
        />
        <Stack.Screen
          name="ForgotPwd"
          component={ForgotPwd}
          options={{headerTitle: ''}}
        />

        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{headerTitle: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
