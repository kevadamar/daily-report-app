import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CHANGE_PASSWWORD } from '../../Navigation/routesName';
import { colors, screenSize } from '../../Styles/globalStyles';

const ProfileScreen = props => {
  const navigator = props.navigation;
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
        <Text style={{ fontSize: 20, color: '#FFF' }}>Profile</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(0,0,0,.5)',
        }}>
        <Image
          style={{
            padding: 10,
            margin: 15,
            borderWidth: 1,
            width: 250,
            height: 150,
            resizeMode: 'stretch',
          }}
          source={require('../../Assets/Images/jne-logo.png')}
        />
      </View>

      <View
        style={{
          paddingHorizontal: 10,
          paddingTop: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontWeight: '900', fontSize: 15 }}>NIK</Text>
        <Text style={{ fontWeight: '900', fontSize: 15 }}>3671225000235</Text>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          paddingTop: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontWeight: '900', fontSize: 15 }}>Nama Lengkap</Text>
        <Text style={{ fontWeight: '900', fontSize: 15 }}>
          Keva Damar Galih
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          paddingTop: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontWeight: '900', fontSize: 15 }}>Jabatan</Text>
        <Text style={{ fontWeight: '900', fontSize: 15 }}>Pegawai</Text>
      </View>

      <View style={{ alignSelf: 'center', position: 'absolute', bottom: 10 }}>
        <TouchableOpacity
          onPress={() => navigator.navigate(CHANGE_PASSWWORD)}
          activeOpacity={0.7}
          style={{
            borderRadius: 10,
            backgroundColor: colors.primaryText,
            padding: 15,
            width: screenSize.width * 0.8,
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text style={{ color: '#FFF', fontWeight: '900' }}>
            CHANGED PASSWORD
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => navigator.navigate(ABSENSI, { name: 'keva' })}
          activeOpacity={0.7}
          style={{
            borderRadius: 10,
            backgroundColor: colors.primaryText,
            padding: 15,
            width: screenSize.width * 0.8,
            alignItems: 'center',
          }}>
          <Text style={{ color: '#FFF', fontWeight: '900' }}>
            UPDATE PROFILE
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
