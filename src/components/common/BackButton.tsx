import {StyleSheet, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function BackButton({onPress}: {onPress: () => void}) {
  return (
    <TouchableHighlight style={styles.container} onPress={onPress}>
      <Icon name="chevron-left" size={16} color="black" />
    </TouchableHighlight>
  );
}

var styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#F4F4F4',
    borderColor: 'black',
    width: 40,
    height: 40,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
