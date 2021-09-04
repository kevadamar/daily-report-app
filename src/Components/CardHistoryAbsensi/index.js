import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../Styles/globalStyles';

const CardHistoryAbsensi = ({ color, title, fullname, today }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Icon
          name="format-list-checks"
          size={35}
          style={{ color: colors.primaryText }}
        />
        <View style={{ paddingLeft: 10 }}>
          <Text style={{ fontWeight: '900', fontSize: 18 }}>{fullname}</Text>
          <Text style={{ color, fontSize: 15 }}>{title}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Icon name="calendar" size={24} style={{ color: colors.primaryText }} />
        <Text style={{ paddingLeft: 10 }}>{today} 09.00</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Icon
          name="format-list-checks"
          size={35}
          style={{ color: colors.primaryText }}
        />
        <View style={{ paddingLeft: 10 }}>
          <Text style={{ fontWeight: '900', fontSize: 18 }}>{fullname}</Text>
          <Text style={{ color, fontSize: 15 }}>{title}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Icon name="calendar" size={24} style={{ color: colors.primaryText }} />
        <Text style={{ paddingLeft: 10 }}>{today} 09.00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '94%',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 12,
    elevation: 5,
  },
});

export default CardHistoryAbsensi;
