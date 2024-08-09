import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function Textbox({
  placeholder,
  value,
  onChangeText,
  fieldError,
}: any) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
      {fieldError && <Text style={styles.inputError}>{fieldError}</Text>}
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
  inputError: {
    fontSize: 10,
    color: 'red',
    fontWeight: '500',
  },
});
