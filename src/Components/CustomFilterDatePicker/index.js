import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { currentDateCalendar } from '../../Helper/constans';
import { colors, screenSize } from '../../Styles/globalStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import ModalReuse from '../ModalReuse';

const CustomFilterDatePicker = () => {
  const [modalVisibleStart, setModalVisibleStart] = useState(false);
  const [modalVisibleEnd, setModalVisibleEnd] = useState(false);
  const [selectedFirstDate, setSelectedFirstDate] = useState(
    currentDateCalendar().current,
  );
  const [selectedSecondDate, setSelectedSecondDate] = useState(
    currentDateCalendar().current,
  );
  return (
    <View
      style={{
        marginTop: 20,
        width: screenSize.width,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={() => setModalVisibleStart(true)}>
        <Text>Mulai</Text>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            marginTop: 10,
            alignItems: 'center',
          }}>
          <Icon
            name="calendar"
            size={25}
            style={{ marginRight: 10, color: colors.primaryText }}
          />
          <Text>{selectedFirstDate}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={() => setModalVisibleEnd(true)}>
        <Text>Akhir</Text>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            marginTop: 10,
            alignItems: 'center',
          }}>
          <Icon
            name="calendar"
            size={25}
            style={{ marginRight: 10, color: colors.primaryText }}
          />
          <Text>{selectedSecondDate}</Text>
        </View>
      </TouchableOpacity>
      {modalVisibleStart && (
        <ModalReuse
          title="Mulai"
          modalVisible={modalVisibleStart}
          setModalVisible={setModalVisibleStart}
          selectedDate={selectedFirstDate}
          setSelectedDate={setSelectedFirstDate}
        />
      )}
      {modalVisibleEnd && (
        <ModalReuse
          title="Akhir"
          modalVisible={modalVisibleEnd}
          setModalVisible={setModalVisibleEnd}
          selectedDate={selectedSecondDate}
          setSelectedDate={setSelectedSecondDate}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 5,
    width: '40%',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default CustomFilterDatePicker;
