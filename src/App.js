import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RouteNavigation from './Navigation';
import { UserContextProvider } from './Contexts/User/context';
const App = () => {
  return (
    <UserContextProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <RouteNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </UserContextProvider>
  );
};

export default App;
