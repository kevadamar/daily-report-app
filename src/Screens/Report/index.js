import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import TopTabsNavigatorDailyReport from '../../Navigation/topTabsNavigatorDailyReport';
import { colors, screenSize } from '../../Styles/globalStyles';

const ReportScreen = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
        }}>
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
          <Text style={{ fontSize: 20, color: '#FFF' }}>Daily Report</Text>
        </View>

        <NavigationContainer independent={true}>
          <TopTabsNavigatorDailyReport />
        </NavigationContainer>
      </View>
    </>
  );
};

export default ReportScreen;
