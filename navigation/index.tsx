import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { BottomTabsNavigator } from './bottom-tabs';

export const Navigator: FC = () => (
  <NavigationContainer>
    <SafeAreaProvider>
      <BottomTabsNavigator />
    </SafeAreaProvider>
  </NavigationContainer>
);
