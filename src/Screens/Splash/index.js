import { StackActions } from '@react-navigation/routers';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { View, SafeAreaView, StatusBar, Image } from 'react-native';
import { setAuthToken } from '../../Config';
import { UserContext } from '../../Contexts/User/context';
import { INDEX, LOGIN } from '../../Navigation/routesName';
import { getDataLocal } from '../../Services/local';
import { screenSize } from '../../Styles/globalStyles';

const SplashScreen = props => {
  const navigator = props.navigation;
  const { userState } = useContext(UserContext);
  const getData = async () => {
    let navigateTo = INDEX;
    const { data, error } = await getDataLocal({ key: 'token' });
    console.log(data, 'splash');
    if (data === null || !data || error) {
      navigateTo = LOGIN;
    }
    setAuthToken(data);
    setTimeout(() => {
      navigator.dispatch(StackActions.replace(navigateTo));
    }, 2000);
  };

  useEffect(() => {
    getData();
  }),
    [];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <StatusBar backgroundColor="#E0E0E0" barStyle="dark-content" />
      <View style={{ alignItems: 'center' }}>
        <Image
          style={{
            width: screenSize.height * 0.26,
            height: screenSize.height * 0.2,
            resizeMode: 'contain',
          }}
          source={require('../../Assets/Images/jne-logo.png')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
