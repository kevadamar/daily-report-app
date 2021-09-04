import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { colors, screenSize } from '../../Styles/globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CardHistoryAbsensi } from '../../Components';
import { currentDate } from '../../Helper/constans';

const HistoryAbsensi = props => {
  const route = props.route;
  const { name } = route.params;
  const navigator = props.navigation;
  useEffect(() => {
    console.log('absensis');
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 20,
          height: screenSize.height * 0.09,
          backgroundColor: colors.primaryText,
          shadowColor: '#000',
          shadowOffset: {
            width: 12,
            height: 10,
          },
          shadowRadius: 22,
          elevation: 15,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigator.pop()}
          activeOpacity={0.5}
          style={{
            borderRadius: 25,
            marginRight: 10,
          }}>
          <Icon name="arrow-back-ios" size={15} style={{ color: '#FFF' }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: '#FFF' }}>Absensi {name}</Text>
      </View>
      <View style={{ alignItems: 'center', marginVertical: 20 }}>
        <CardHistoryAbsensi
          today={currentDate()}
          color="green"
          fullname="Keva Damar Galih"
          title="Masuk Tepat Waktu"
        />
      </View>
    </SafeAreaView>
  );
};

export default HistoryAbsensi;
