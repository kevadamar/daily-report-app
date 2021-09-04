import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { CardHistory, CustomFilterDatePicker } from '../../Components';
import { ABSENSI } from '../../Navigation/routesName';
import { colors, screenSize } from '../../Styles/globalStyles';

const HistoryScreen = props => {
  const navigator = props.navigation;
  const [isSelectedFilter, setIsSelectedFilter] = useState({
    day: false,
    week: true,
    month: false,
  });
  const handleSelectedFilter = key => {
    let newState = { day: false, week: false, month: false };

    if (key === 'day') {
      const day = isSelectedFilter.day;
      newState = { day: day ? false : true, week: false, month: false };
    }
    if (key === 'week') {
      const week = isSelectedFilter.week;
      newState = { day: false, week: week ? false : true, month: false };
    }
    if (key === 'month') {
      const month = isSelectedFilter.month;
      newState = { day: false, week: false, month: month ? false : true };
    }

    setIsSelectedFilter(newState);
  };

  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }}>
      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 10,
          height: screenSize.height * 0.09,
          backgroundColor: colors.primaryText,
          shadowColor: '#000',
          shadowOffset: {
            width: 12,
            height: 10,
          },
          shadowRadius: 22,
          elevation: 15,
        }}>
        <Text style={{ fontSize: 20, color: '#FFF' }}>History Absensi</Text>
      </View>
      <CardHistory
        isSelected={isSelectedFilter}
        setIsSelected={key => handleSelectedFilter(key)}
      />
      {!isSelectedFilter.day &&
        !isSelectedFilter.week &&
        !isSelectedFilter.month && <CustomFilterDatePicker />}
      <View style={{ alignSelf: 'center', position: 'absolute', bottom: 10 }}>
        <TouchableOpacity
          onPress={() => navigator.navigate(ABSENSI, { name: 'keva' })}
          activeOpacity={0.7}
          style={{
            borderRadius: 10,
            backgroundColor: colors.primaryText,
            padding: 15,
            width: screenSize.width * 0.8,
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 20, color: '#FFF' }}>Check</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HistoryScreen;
