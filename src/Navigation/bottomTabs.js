import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, screenSize } from '../Styles/globalStyles';
import { HISTORY, HOME, PROFILE, REPORT } from './routesName';

export function BottomTabs({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: screenSize.height * 0.08,
        borderTopWidth: 2,
        borderColor: '#E0E0E0',
      }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        let iconName, color, size, icon;
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        color = isFocused ? colors.primaryText : '#222';
        size = isFocused ? 24 : 20;

        if (route.name === HOME) {
          iconName = isFocused ? 'ios-home' : 'ios-home-outline';
          icon = <Ionicons name={iconName} size={size} color={color} />;
        } else if (route.name === HISTORY) {
          iconName = isFocused ? 'clipboard-list' : 'clipboard-list-outline';
          icon = (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        } else if (route.name === PROFILE) {
          iconName = isFocused ? 'account' : 'account-outline';
          icon = (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        } else if (route.name === REPORT) {
          iconName = isFocused ? 'note-text' : 'note-text-outline';
          icon = (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
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
            activeOpacity={0.5}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {icon}
            <Text
              style={{
                color: isFocused ? colors.primaryText : '#222',
                fontWeight: isFocused ? '900' : '200',
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
