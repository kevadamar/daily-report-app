import React from 'react';
import { View, Text, Modal, Alert, StyleSheet } from 'react-native';
import { currentDateCalendar } from '../../Helper/constans';
import Icon from 'react-native-vector-icons/AntDesign';
import CalendarPicker from '../CalendarPicker';

const ModalReuse = ({
  title,
  modalVisible,
  setModalVisible,
  selectedDate,
  setSelectedDate,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={{ position: 'relative', ...styles.modalView }}>
          <Text style={styles.modalText}>{title}</Text>
          <Icon
            name="closecircle"
            size={30}
            style={styles.buttonExit}
            onPress={() => setModalVisible(!modalVisible)}
          />
          {modalVisible && (
            <CalendarPicker
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              minDate={currentDateCalendar().minDate}
              maxDate={currentDateCalendar().maxDate}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 15,
  },
  buttonExit: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: 'red',
  },
});

export default ModalReuse;
