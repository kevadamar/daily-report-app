import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';

import {
  CardAbsen,
  CardKehadiranHome,
  FloatingCardHome,
} from '../../Components';
import { currentDate, currentTimeNow } from '../../Helper/constans';
import { colors, screenSize } from '../../Styles/globalStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import { removeDataLocal } from '../../Services/local';
import { StackActions } from '@react-navigation/routers';
import { LOGIN } from '../../Navigation/routesName';
import { API } from '../../Config';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const HomeScreen = props => {
  const navigator = props.navigation;
  const [isCheckin, setIsCheckin] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [dataCheck, setDataCheck] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    console.log('fetch refresh');
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const validateCheckin = () => {
    const { hours, minutes, seconds } = currentTimeNow();
    console.log(hours, seconds);
    if (hours >= 7 && minutes >= 0) {
      let msg = 'Tepat Waktu';
      if (hours >= 9 && minutes >= 1) {
        msg = `Terlambat ${hours - 9} Jam, ${minutes - 0} Menit, ${
          seconds - 0
        } Detik`;
      }
      if (hours <= 8 && minutes <= 59) {
        msg = `Lebih Cepat ${-1 * (hours - 9)} Jam, ${minutes - 0} Menit, ${
          seconds - 0
        } Detik`;
      }
      setIsCheckin(currState => !currState);
      ToastAndroid.show(`Absen ${msg}!`, ToastAndroid.LONG);
    } else if (hours < 7 && minutes <= 59) {
      ToastAndroid.show(
        'Absen Di tolak. Minimal absen jam 07.00!',
        ToastAndroid.LONG,
      );
    }
  };
  const validateCheckout = () => {
    const { hours, minutes, seconds } = currentTimeNow();
    console.log('pulang', hours, minutes);
    let msg = 'Tepat Waktu';
    if (hours >= 17 && minutes >= 1) {
      msg = `Lebih Waktu ${hours - 17} Jam, ${minutes - 0} Menit, ${
        seconds - 0
      } Detik`;
      setIsCheckout(currState => !currState);
      ToastAndroid.show(`Absen Pulang. ${msg}!`, ToastAndroid.LONG);
    } else if (hours < 17 && minutes <= 59) {
      ToastAndroid.show(
        'Absen Pulang Ditolak. Minimal absen jam 17.00!',
        ToastAndroid.LONG,
      );
    }
  };

  const handleLogout = async () => {
    await removeDataLocal({ key: 'token' });
    navigator.dispatch(StackActions.replace(LOGIN));
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await API.get('absensi?type=hari');
      if (response.status === 200) {
        setDataCheck(response.data.data);
        console.log(response.data);
      } else {
        ToastAndroid.show(
          `Fetch gagal status : ${response.status}`,
          ToastAndroid.SHORT,
        );
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      ToastAndroid.show('gagal fetch', ToastAndroid.LONG);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <StatusBar backgroundColor="#3F51B5" barStyle="light-content" />
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => onRefresh()}
          />
        }>
        <View
          style={{
            height: screenSize.height * 0.238,
            paddingVertical: 20,
            paddingHorizontal: 10,
            backgroundColor: colors.primaryText,
          }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20, color: 'white' }}>
              Absensi & Daily Report JNE
            </Text>
            <TouchableOpacity onPress={() => handleLogout()}>
              <Icon name="logout" color="#FFF" size={25} />
            </TouchableOpacity>
          </View>
          <View style={{ height: screenSize.height * 0.06 }} />
          <Text style={{ fontSize: 18, color: 'white' }}>
            Hari ini {currentDate()}
          </Text>
        </View>
        <FloatingCardHome />
        <View style={{ height: screenSize.height * 0.1 }} />
        <View
          style={{
            flexDirection: 'row',
            width: screenSize.width,
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <CardAbsen
            isCheck={isCheckin}
            setIsCheck={() => validateCheckin()}
            color="green"
            title="ABSEN MASUK"
          />
          <CardAbsen
            isCheck={isCheckout || !isCheckin}
            setIsCheck={() => validateCheckout()}
            color="red"
            title="ABSEN PULANG"
          />
        </View>
        <View style={{ paddingHorizontal: 10, paddingTop: 25 }}>
          <Text style={{ paddingLeft: 10, fontSize: 18, fontWeight: '900' }}>
            Kehadiran hari ini
          </Text>
          <View
            style={{
              alignItems: 'center',
              marginTop: 25,
            }}>
            {isLoading && <Text>Loading . . . </Text>}

            {!isLoading && dataCheck.length === 0 ? (
              <Text>Kamu Belum Melakukan Absensi hari ini</Text>
            ) : (
              dataCheck.map(data => {
                return <CardKehadiranHome data={data} />;
              })
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
