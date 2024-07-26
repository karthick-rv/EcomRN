// ImageButton.js
import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

const ImageButton = ({imageSource, buttonText}: any) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image source={imageSource} style={styles.buttonImage} />
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: '#F4F4F4',
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
    marginLeft: 50,
  },
  buttonImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default ImageButton;
