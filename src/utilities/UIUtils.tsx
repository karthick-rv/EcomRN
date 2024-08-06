import Snackbar from 'react-native-snackbar';

export class UIUtils {
  static showSnackBar(message: string) {
    Snackbar.show({
      text: message,
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: '#8E6CEF',
    });
  }
}
