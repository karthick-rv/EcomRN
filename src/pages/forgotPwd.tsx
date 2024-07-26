import React, {useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const ForgotPwd = () => {
  const [password, setPassword] = useState('');

  const ContinueButton = () => {
    if (password != '') {
    }
  };

  return (
    <View style={styles.itemContainer}>
      <Text style={{fontWeight: '700', fontSize: 32, color: 'black'}}>
        Sign In
      </Text>

      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity onPress={ContinueButton} style={styles.continueButton}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  continueButton: {
    backgroundColor: '#8E6CEF',
    padding: 8,
    borderRadius: 100,
    marginTop: 5,
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    paddingHorizontal: 10,

    backgroundColor: 'white',
    paddingTop: 40,
  },
  input: {
    height: 40,
    marginTop: 24,
    backgroundColor: '#F4F4F4',
    padding: 10,
    borderRadius: 4,
    marginBottom: 12,
  },
});

export default ForgotPwd;
