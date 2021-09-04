import React from 'react';
import { Calendar } from 'react-native-calendars';
const CalendarPicker = ({
  selectedDate,
  modalVisible,
  minDate,
  maxDate,
  setSelectedDate,
  setModalVisible,
}) => {
  return (
    <Calendar // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
      current={selectedDate}
      markedDates={{
        [selectedDate]: {
          selected: true,
        },
      }}
      minDate={minDate}
      // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
      maxDate={maxDate}
      // Handler which gets executed on day press. Default = undefined
      onDayPress={day => {
        console.log('selected day', day);
        setSelectedDate(day.dateString);
        setModalVisible(!modalVisible);
      }}
    />
  );
};

export default CalendarPicker;
