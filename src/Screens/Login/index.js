import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import {
  BackHandler,
  Image,
  Keyboard,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { InputReuse } from '../../Components';
import { API, setAuthToken } from '../../Config';
import { UserContext } from '../../Contexts/User/context';
import { INDEX, REGISTER } from '../../Navigation/routesName';
import { storeDataLocal } from '../../Services/local';
import { colors, screenSize } from '../../Styles/globalStyles';
import { stylesLogin as styles } from './styles';

const LoginScreen = props => {
  const navigator = props.navigation;
  const { userState, userDispatch } = useContext(UserContext);
  const [isBack, setIsBack] = useState(false);
  const [nik, setNik] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState({});
  const backHandler = useRef('');

  const resetState = () => {
    setTimeout(() => {
      setNik('');
      setPassword('');
      setErr({});
    }, 200);
  };

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

  const handleLogin = async () => {
    if (!nik || nik.length < 16 || !password || password.length < 8) {
      validateNik(nik);
      validatePassword(password);
    } else {
      try {
        const response = await API.post('login', { nik, password });

        if (response.status === 200) {
          const { data } = await storeDataLocal({
            key: 'token',
            data: response.data.data.token,
          });
          console.log('log sss = ', data);
          console.log('log success = ', response.status);
          setAuthToken(response.data.data.token);
          navigator.navigate(INDEX);
          resetState();
          Keyboard.dismiss();
        } else {
          ToastAndroid.show(
            'Username atau password tidak valid',
            ToastAndroid.SHORT,
          );
        }
      } catch (error) {
        ToastAndroid.show(
          'Username atau password tidak valid',
          ToastAndroid.SHORT,
        );
      }
    }
  };

  const handleToRegister = () => {
    navigator.navigate(REGISTER);
    resetState();
  };

  const backAction = useCallback(() => {
    if (!isBack) {
      ToastAndroid.show(
        'Tekan kembali untuk keluar aplikasi',
        ToastAndroid.SHORT,
      );
      setIsBack(true);
      setTimeout(() => {
        console.log('s', isBack);

        setIsBack(false);
      }, 2000);
    } else {
      BackHandler.exitApp();
    }
    return true;
  }, [isBack]);

  // did mount & did update
  useEffect(() => {
    if (Platform.OS === 'android') {
      backHandler.current = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
    }
  }, [backAction]);

  // will mount
  useEffect(() => {
    return () => {
      if (Platform.OS === 'android') {
        setIsBack(false);
        backHandler.current.remove();
      }
    };
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <StatusBar backgroundColor="#E0E0E0" barStyle="dark-content" />
      <View style={{ alignItems: 'center' }}>
        <View style={{ marginBottom: 10, width: screenSize.width * 0.5 }}>
          <Text
            style={{
              fontSize: 28,
              color: colors.primaryText,
              letterSpacing: 2,
              fontWeight: '900',
              textAlign: 'center',
            }}>
            Absensi & Daily Report
          </Text>
        </View>
        <View>
          <Image
            style={{
              width: screenSize.height * 0.26,
              height: screenSize.height * 0.2,
              resizeMode: 'contain',
            }}
            source={require('../../Assets/Images/jne-logo.png')}
          />
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
            Password
          </Text>

          <InputReuse
            secureTextEntry={true}
            placeholder="Masukkan password"
            value={password}
            onChangeText={text => validatePassword(text)}
          />

          {err?.password?.length > 0 && (
            <Text style={{ marginTop: 10, color: 'red' }}>{err?.password}</Text>
          )}
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleLogin()}
          style={styles.button}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <Text style={{ color: colors.primaryText, ...styles.utilText }}>
            Atau
          </Text>
          <Text
            style={{
              marginTop: 10,
              color: colors.primaryText,
              ...styles.utilText,
            }}>
            Belum memiliki akun ?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => handleToRegister()}
            style={{ alignContent: 'center' }}>
            <Text
              style={{
                marginTop: 10,
                textDecorationLine: 'underline',
                color: colors.secondaryText,
                ...styles.utilText,
              }}>
              Daftar Disini
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: screenSize.height * 0.1 }} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
