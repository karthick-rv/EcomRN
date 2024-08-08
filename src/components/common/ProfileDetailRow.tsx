import {StyleSheet, Text} from 'react-native';

const ProfileDetailRow = ({label, value}: {label: string; value: string}) => {
  return (
    <Text style={styles.detail}>
      <Text style={{fontWeight: 'bold'}}>{label} </Text>
      {value}
    </Text>
  );
};

const styles = StyleSheet.create({
  detail: {
    fontSize: 15,
    color: 'black',
    marginTop: 10,
  },
});

export default ProfileDetailRow;
