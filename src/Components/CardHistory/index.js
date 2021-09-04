import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../Styles/globalStyles';

const CardHistory = ({ isSelected, setIsSelected }) => {
  return (
    <View style={{ paddingTop: 10, paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: 10 }}>
        Periode
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <TouchableOpacity
          onPress={() => setIsSelected('day')}
          style={{ width: '30%' }}>
          <Card title="Day" isSelected={isSelected.day} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsSelected('week')}
          style={{ width: '30%' }}>
          <Card title="Week" isSelected={isSelected.week} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsSelected('month')}
          style={{ width: '30%' }}>
          <Card title="Month" isSelected={isSelected.month} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Card = ({ isSelected, title }) => {
  return (
    <View
      style={{
        ...styles.cardContainer,
        backgroundColor: isSelected ? colors.primaryText : '#FFF',
      }}>
      <Text style={{ color: isSelected ? '#FFF' : '#000' }}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
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
export default CardHistory;
