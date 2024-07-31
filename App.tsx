/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionSpecs,
} from '@react-navigation/stack';
import React from 'react';
import {Easing, StyleSheet} from 'react-native';

import {} from 'react-native/Libraries/NewAppScreen';
import ForgotPwd from './src/screens/ForgetPassword';
import CreateAccount from './src/screens/CreateAccount';
import SignInPassword from './src/screens/SignInPassword';
import SignInEmail from './src/screens/SignInEmail';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

const MyTransitionSpec = {
  animation: 'timing' as const,
  config: {
    duration: 500,
    easing: Easing.out(Easing.poly(4)),
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerTitle: '',
          headerShown: false,
          // presentation: 'modal',
          animationTypeForReplace: 'push',
          transitionSpec: {
            open: MyTransitionSpec,
            close: MyTransitionSpec,
          },
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          name="SignInEmail"
          component={SignInEmail}
          options={{headerTitle: ''}}
        />
        <Stack.Screen
          name="SignInPassword"
          component={SignInPassword}
          options={{}}
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

        <Stack.Screen
          name="Home"
          component={Home}
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
