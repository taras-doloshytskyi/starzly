import React, { FC } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
  BottomTabBar
} from '@react-navigation/bottom-tabs';

import {
  AccountIcon,
  CartIcon,
  CompassIcon,
  PlusSquareIcon,
  SearchIcon
} from '@icons';
import { BottomTabsScreens, Colors } from '@enums';
import { BottomTabsParamsList } from '@types';
import { DiscoverScreen } from '@screens';

const BottomTabs = createBottomTabNavigator<BottomTabsParamsList>();

export const bottomTabsNavigatorOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: Colors.transparentBlack,
    borderWidth: 0
  },
  tabBarInactiveTintColor: Colors.white,
  tabBarActiveTintColor: Colors.pink
};

export const screens = {
  [BottomTabsScreens.discover]: DiscoverScreen,
  [BottomTabsScreens.stars]: DiscoverScreen,
  [BottomTabsScreens.add]: DiscoverScreen,
  [BottomTabsScreens.cart]: DiscoverScreen,
  [BottomTabsScreens.profile]: DiscoverScreen
};

export const screensOptions: Record<
  BottomTabsScreens,
  BottomTabNavigationOptions
> = {
  [BottomTabsScreens.discover]: {
    tabBarLabel: 'Discover',
    tabBarIcon: (params) => <CompassIcon {...params} />
  },
  [BottomTabsScreens.stars]: {
    tabBarLabel: 'Stars',
    tabBarIcon: (params) => <SearchIcon {...params} />
  },
  [BottomTabsScreens.add]: {
    tabBarLabel: 'Add',
    tabBarIcon: (params) => <PlusSquareIcon {...params} />
  },
  [BottomTabsScreens.cart]: {
    tabBarLabel: 'Cart',
    tabBarIcon: (params) => <CartIcon {...params} />
  },
  [BottomTabsScreens.profile]: {
    tabBarLabel: 'Profile',
    tabBarIcon: (params) => <AccountIcon {...params} />
  }
};

export const BottomTabsNavigator: FC = () => {
  return (
    <BottomTabs.Navigator screenOptions={bottomTabsNavigatorOptions}>
      {Object.entries(screens).map(([name, component]) => (
        <BottomTabs.Screen
          key={name}
          {...{
            name: name as BottomTabsScreens,
            component,
            options: screensOptions[name as BottomTabsScreens]
          }}
        />
      ))}
    </BottomTabs.Navigator>
  );
};
