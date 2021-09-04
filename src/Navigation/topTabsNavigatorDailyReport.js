import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, TouchableOpacity, View } from 'react-native';
import { REPORT_EMPLOYEE, REPORT_MANAGER } from './routesName';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TopTab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}>
      <Text>Home!</Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#FFF',
          borderRadius: 25,
          padding: 5,
          position: 'absolute',
          bottom: 35,
          right: 25,
        }}>
        <Icon name="clipboard-plus-outline" size={50} />
      </TouchableOpacity>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function TopTabs({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'center',
      }}>
      {state.routes.map((route, index) => {
        let label;
        const { options } = descriptors[route.key];
        const routeName =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        if (routeName === REPORT_MANAGER) {
          label = 'Personal Report';
        } else if (routeName === REPORT_EMPLOYEE) {
          label = 'Employee Report';
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              paddingVertical: 15,
              borderBottomWidth: 1.5,
              borderBottomColor: isFocused ? '#673ab7' : 'rgba(0,0,0,0)',
            }}>
            <Text>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const TopTabsNavigatorDailyReport = () => {
  return (
    <TopTab.Navigator tabBar={props => <TopTabs {...props} />}>
      <TopTab.Screen name={REPORT_MANAGER} component={HomeScreen} />
      <TopTab.Screen name={REPORT_EMPLOYEE} component={SettingsScreen} />
    </TopTab.Navigator>
  );
};

export default TopTabsNavigatorDailyReport;
