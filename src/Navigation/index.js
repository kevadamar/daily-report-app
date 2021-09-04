import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  ChangePasswordScreen,
  LoginScreen,
  RegisterScreen,
  SplashScreen,
} from '../Screens';
import HistoryAbsensi from '../Screens/HistoryAbsensi';
import {
  ABSENSI,
  CHANGE_PASSWWORD,
  INDEX,
  LOGIN,
  REGISTER,
  SPLASH,
} from './routesName';
import TabsNavigator from './tabsNavigator';

const Stack = createNativeStackNavigator();

const RouteNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={SPLASH}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SPLASH} component={SplashScreen} />
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen name={REGISTER} component={RegisterScreen} />
      <Stack.Screen name={INDEX} component={TabsNavigator} />
      <Stack.Screen name={ABSENSI} component={HistoryAbsensi} />
      <Stack.Screen name={CHANGE_PASSWWORD} component={ChangePasswordScreen} />
    </Stack.Navigator>
  );
};

export default RouteNavigation;
