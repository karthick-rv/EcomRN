import React from 'react';
import {View, ActivityIndicator, StyleSheet, Modal} from 'react-native';

const LoadingSpinner = ({loading}: {loading: boolean}) => {
  if (!loading) return null;

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size={25} color="black" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default LoadingSpinner;
