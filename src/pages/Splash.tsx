import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

const {width, height} = Dimensions.get('window');

export default function Splash() {
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
