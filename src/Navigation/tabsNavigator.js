import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HistoryScreen, HomeScreen, ProfileScreen } from '../Screens';
import { HISTORY, HOME, PROFILE, REPORT } from './routesName';
import { BottomTabs } from './bottomTabs';
import ReportScreen from '../Screens/Report';
const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      safeAreaInsets={{ top: 20 }}
      initialRouteName={HOME}
      tabBar={props => <BottomTabs {...props} />}>
      <Tab.Screen name={HISTORY} component={HistoryScreen} />
      <Tab.Screen name={HOME} component={HomeScreen} />
      <Tab.Screen name={REPORT} component={ReportScreen} />
      <Tab.Screen name={PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
