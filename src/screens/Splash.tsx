import {ParamListBase, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {LocalStorageManager} from '../utilities/LocalStorageManager';
import {Storage} from '../constants/storage';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

const {width, height} = Dimensions.get('window');

export default function Splash() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useEffect(() => {
    setTimeout(() => {
      LocalStorageManager.retrieveData(Storage.USER_KEY).then(value => {
        if (value != null) {
          const user: FirebaseAuthTypes.User = JSON.parse(value);
          console.log(user);
          if (user.email != null) {
            navigation.navigate('BottomTabs');
          } else {
            navigation.navigate('SignInEmail');
          }
        } else {
          navigation.navigate('SignInEmail');
        }
      });
    }, 2000);
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require('../assets/logo.png')}></Image>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8E6CEF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.4,
    height: height * 0.2,
  },
});
