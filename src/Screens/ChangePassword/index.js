import React, { useState } from 'react';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { InputReuse } from '../../Components';
import { INDEX } from '../../Navigation/routesName';
import { colors, screenSize } from '../../Styles/globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ChangePasswordScreen = props => {
  const navigator = props.navigation;
  const [password, setPassword] = useState('');
  const [err, setErr] = useState({});
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
      </View>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ marginBottom: 10, fontSize: 18, fontWeight: '700' }}>
            New Password
          </Text>

          <InputReuse
            secureTextEntry={true}
            placeholder="Masukkan New password"
            value={password}
            onChangeText={text => validatePassword(text)}
          />

          {err?.password?.length > 0 && (
            <Text style={{ marginTop: 10, color: 'red' }}>{err?.password}</Text>
          )}
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ marginBottom: 10, fontSize: 18, fontWeight: '700' }}>
            New Confirm Password
          </Text>

          <InputReuse
            secureTextEntry={true}
            placeholder="Masukkan New Confirm password"
            value={password}
            onChangeText={text => validatePassword(text)}
          />

          {err?.password?.length > 0 && (
            <Text style={{ marginTop: 10, color: 'red' }}>{err?.password}</Text>
          )}
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigator.navigate(INDEX);
            console.log('log');
            Keyboard.dismiss();
          }}
          style={styles.button}>
          <Text style={styles.textButton}>SAVE PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#303F9F',
    padding: 10,
    width: screenSize.width * 0.8,
    alignItems: 'center',
    borderRadius: 15,
    elevation: 10,
  },
  textButton: {
    color: '#FFF',
    fontWeight: '900',
    letterSpacing: 2,
    fontSize: 20,
  },
});
