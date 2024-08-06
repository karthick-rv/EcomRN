// ImageButton.js
import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import LoadingSpinner from './LoadingSpinner';

const CurvedButton = ({buttonText, onPress, loading}: any) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {loading ? (
        <LoadingSpinner loading={loading} />
      ) : (
        <Text style={styles.buttonText}>{buttonText}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#8E6CEF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 100,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
  },
  buttonImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default CurvedButton;
