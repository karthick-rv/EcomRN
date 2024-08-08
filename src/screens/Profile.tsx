import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LocalStorageManager} from '../utilities/LocalStorageManager';
import {Storage} from '../constants/storage';
import ProfileDetailRow from '../components/common/ProfileDetailRow';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AuthService from '../services/AuthService';
import {
  CommonActions,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';

export const Profile = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User>();
  const [lastSignIn, setLastSignIn] = useState('');
  const [profileCreation, setProfileCreation] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useEffect(() => {
    LocalStorageManager.retrieveData(Storage.USER_KEY).then(value => {
      if (value != null) {
        const userJson: FirebaseAuthTypes.User = JSON.parse(value);
        setLastSignIn(
          timeStampToReadableString(userJson.metadata?.lastSignInTime ?? ''),
        );
        setProfileCreation(
          timeStampToReadableString(userJson.metadata?.creationTime ?? ''),
        );
        setUser(userJson);
      }
    });
  }, []);

  const timeStampToReadableString = (timestamp: string) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()} `;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageHeader}>
        <Image
          source={require('../assets/placeholder.jpg')}
          style={styles.circularImgView}
        />
      </View>

      <View style={styles.body}>
        <View style={styles.detail}>
          <ProfileDetailRow label="Email :" value={user?.email ?? ''} />
          <ProfileDetailRow
            label="Login Method :"
            value={user?.providerData[0].providerId ?? ''}
          />
          <ProfileDetailRow
            label="Profile creation :"
            value={profileCreation ?? ''}
          />
          <ProfileDetailRow label="Last SignIn :" value={lastSignIn ?? ''} />
        </View>
        <TouchableOpacity
          onPress={() => {
            LocalStorageManager.clearStorage();
            AuthService.signOut();
            navigation.dispatch(
              CommonActions.reset({
                index: 0, // The index of the route you want to show (0 is the first route)
                routes: [{name: 'SignInEmail'}], // Array of routes you want to set in the stack
              }),
            );
          }}>
          <Text style={styles.signOut}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageHeader: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  body: {
    flex: 3,
    marginTop: 30,
  },
  circularImgView: {
    height: 100,
    width: 100,
    backgroundColor: '#F4F4F4',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
  },
  detail: {
    marginHorizontal: 20,
    borderRadius: 5,
    padding: 20,
    backgroundColor: '#F4F4F4',
  },
  name: {
    fontSize: 15,
    color: 'black',
  },
  email: {
    fontSize: 15,
    color: 'black',
    marginTop: 5,
  },
  signOut: {
    color: '#FA3636',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 30,
  },
});
