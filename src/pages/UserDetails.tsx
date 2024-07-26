import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function UserDetails() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View style={{flex: 1, backgroundColor: 'white'}} />
      <View style={styles.container}>
        <Text style={styles.title}>Tell us about yourself</Text>
        <Text style={styles.shopForText}>What do you shop for?</Text>
        <Text style={styles.shopForText}>How Old are you?</Text>
      </View>
      <View style={styles.footer}>
        <Button title="Finish" color="#8E6CEF"></Button>
      </View>
    </SafeAreaView>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 8,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#272727',
    marginTop: 10,
  },

  shopForText: {
    marginTop: 40,
    fontSize: 16,
    color: '#272727',
  },

  footer: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
});
