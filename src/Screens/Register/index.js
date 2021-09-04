import React, { useEffect, useRef, useState } from 'react';
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { InputReuse } from '../../Components';
import { colors, screenSize } from '../../Styles/globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';
import { stylesRegister as styles } from './styles';
import { INDEX, LOGIN } from '../../Navigation/routesName';
import { API, setAuthToken } from '../../Config';
import { storeDataLocal } from '../../Services/local';

const RegisterScreen = props => {
  const pickerRef = useRef();
  const navigator = props.navigation;

  const [nik, setNik] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [position, setPosition] = useState('2');
  const [err, setErr] = useState({});

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const validateNik = text => {
    setNik(text);
    let msg = 'NIK Min 16 Digit';

    if (text.length < 16) {
      if (text.length === 0) {
        console.log(text);
        msg = 'NIK Harus Diisi';
      }

      setErr(currState => ({ ...currState, ['nik']: msg }));
    } else {
      console.log('valid nik : ', text.length);
      setErr(currState => ({ ...currState, ['nik']: '' }));
    }
  };
  const validatePassword = text => {
    setPassword(text);
    let msg = 'Password Min 8 Digit';

    if (text.length < 8) {
      if (text.length === 0) {
        console.log(text);
        msg = 'Password Harus Diisi';
      }

      setErr(currState => ({ ...currState, ['password']: msg }));
    } else {
      console.log('valid password : ', text.length);
      setErr(currState => ({ ...currState, ['password']: '' }));
    }
  };
  const validateFullname = text => {
    setFullname(text);
    let msg = 'Fullname Min 3 Digit';

    if (text.length < 3) {
      if (text.length === 0) {
        console.log(text);
        msg = 'Fullname Harus Diisi';
      }

      setErr(currState => ({ ...currState, ['fullname']: msg }));
    } else {
      console.log('valid fullname : ', text.length);
      setErr(currState => ({ ...currState, ['fullname']: '' }));
    }
  };
  const validatePosition = text => {
    setPosition(text);
  };

  const handleRegister = async () => {
    try {
      const response = await API.post('register', {
        nik,
        password,
        fullname,
        role_id: position,
      });

      if (response.status === 200) {
        const { data } = await storeDataLocal({
          key: 'token',
          data: response.data.data.token,
        });
        console.log('log sss = ', data);
        console.log('log success = ', response.status);
        setAuthToken(response.data.data.token);

        navigator.navigate(LOGIN);
        console.log('log');
        Keyboard.dismiss();
      } else {
        console.log(response);
        ToastAndroid.show('nik sudah dipakai', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error, 'regis');
      ToastAndroid.show('data tidak valid', ToastAndroid.SHORT);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor="#E0E0E0" barStyle="dark-content" />

      <View
        style={{
          alignSelf: 'flex-start',
          flexDirection: 'row',
          padding: 10,
          width: screenSize.width,
          borderBottomWidth: 1,
          borderColor: '#C5CAE9',
        }}>
        <TouchableOpacity
          onPress={() => navigator.pop()}
          activeOpacity={0.5}
          style={{
            padding: 10,
            borderRadius: 25,
            backgroundColor: '#eaeaea',
          }}>
          <Icon name="arrow-back-ios" size={20} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            marginLeft: 10,
            paddingTop: 5,
            textAlign: 'right',
            fontWeight: '900',
          }}>
          Register
        </Text>
      </View>
      <ScrollView
        style={{ width: screenSize.width }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ marginBottom: 10, fontSize: 18, fontWeight: '700' }}>
              Nama Lengkap
            </Text>
            <View style={{ position: 'relative' }}>
              <InputReuse
                valueState={fullname}
                onChangeText={text => validateFullname(text)}
                placeholder="Masukkan Nama Lengkap"
              />
            </View>
            {err?.fullname?.length > 0 && (
              <Text style={{ marginTop: 10, color: 'red' }}>
                {err?.fullname}
              </Text>
            )}
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ marginBottom: 10, fontSize: 18, fontWeight: '700' }}>
              NIK
            </Text>
            <View style={{ position: 'relative' }}>
              <InputReuse
                valueState={nik}
                onChangeText={text => validateNik(text)}
                maxLength={16}
                placeholder="Masukkan NIK"
                keyboardType="numeric"
              />
            </View>
            {err?.nik?.length > 0 && (
              <Text style={{ marginTop: 10, color: 'red' }}>{err?.nik}</Text>
            )}
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ marginBottom: 10, fontSize: 18, fontWeight: '700' }}>
              Posisi
            </Text>
            <View
              style={{
                height: 40,
                width: screenSize.width * 0.8,
                borderWidth: 2,
                // padding: 10,
                borderRadius: 10,
                borderColor: colors.primaryText,
                justifyContent: 'center',
              }}>
              <Picker
                ref={pickerRef}
                selectedValue={position}
                mode="dropdown"
                onValueChange={(itemValue, itemIndex) =>
                  validatePosition(itemValue)
                }>
                <Picker.Item label="Pegawai" value="2" />
                <Picker.Item label="Manager" value="1" />
              </Picker>
            </View>
            {err?.position?.length > 0 && (
              <Text style={{ marginTop: 10, color: 'red' }}>
                {err?.position}
              </Text>
            )}
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ marginBottom: 10, fontSize: 18, fontWeight: '700' }}>
              Password
            </Text>

            <InputReuse
              secureTextEntry={true}
              placeholder="Masukkan password"
              value={password}
              onChangeText={text => validatePassword(text)}
            />

            {err?.password?.length > 0 && (
              <Text style={{ marginTop: 10, color: 'red' }}>
                {err?.password}
              </Text>
            )}
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              handleRegister();
            }}
            style={styles.button}>
            <Text style={styles.textButton}>Register</Text>
          </TouchableOpacity>
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text
              style={{
                color: colors.primaryText,
                ...styles.utilText,
              }}>
              Atau
            </Text>
            <Text
              style={{
                marginTop: 10,
                color: colors.primaryText,
                ...styles.utilText,
              }}>
              Sudah memiliki akun ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigator.pop()}
              style={{ alignContent: 'center' }}>
              <Text
                style={{
                  marginTop: 10,
                  color: colors.secondaryText,
                  ...styles.utilText,
                  textDecorationLine: 'underline',
                }}>
                Login Disini
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: screenSize.height * 0.1 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
