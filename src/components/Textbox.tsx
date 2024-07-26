import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export default function Textbox({placeholder, value, onChangeText}: any) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  input: {
    height: 55,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#F4F4F4',
  },
});
