import AsyncStorage from '@react-native-async-storage/async-storage';

export class LocalStorageManager {
  static storeData = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      // Error saving data
    }
  };

  static retrieveData = async (key: string): Promise<string | null> => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      // Error retreiving data
      return null;
    }
  };

  static clearStorage = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.error('Failed to clear the AsyncStorage.', e);
    }
  };
}
