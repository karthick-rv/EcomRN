import {useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';

interface AppModalParams {
  message: string;
  modalVisible: boolean;
  setModalVisible: (visibility: boolean) => void;
}

const AppModal = ({message, modalVisible, setModalVisible}: AppModalParams) => {
  //   const [modalVisible, setModalVisible] = useState(false);

  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      animationType="none"
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>{message}</Text>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 15,
  },
});

export default AppModal;
