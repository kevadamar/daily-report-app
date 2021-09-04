import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, screenSize } from '../../Styles/globalStyles';

const FloatinCardHome = () => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Icon
          name="door-open"
          size={45}
          style={{ color: colors.primaryText }}
        />
        <Text style={{ fontWeight: '900', fontSize: 18, marginTop: 6 }}>
          JAM MASUK
        </Text>
        <Text style={{ fontWeight: '600', marginTop: 6 }}>09.00</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Icon
          name="door-closed"
          size={45}
          style={{ color: colors.primaryText }}
        />
        <Text style={{ fontWeight: '900', fontSize: 18, marginTop: 6 }}>
          JAM PULANG
        </Text>
        <Text style={{ fontWeight: '600', marginTop: 6 }}>17.00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    top: screenSize.height * 0.16,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingVertical: 10,
    width: screenSize.width * 0.9,
    height: screenSize.height * 0.15,
    shadowColor: '#000',
    shadowOffset: {
      width: 12,
      height: 10,
    },
    shadowRadius: 22,
    elevation: 10,
  },
});

export default FloatinCardHome;
