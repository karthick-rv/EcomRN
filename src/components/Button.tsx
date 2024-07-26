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
    backgroundColor: 'lightblue',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 100,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 70,
  },
  buttonImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default ImageButton;
