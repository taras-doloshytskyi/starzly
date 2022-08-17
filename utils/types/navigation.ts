import { FunctionComponent } from 'react';
import {
  BottomTabScreenProps,
  BottomTabNavigationProp,
  BottomTabNavigationOptions
} from '@react-navigation/bottom-tabs';

import { BottomTabsScreens } from '@enums';

export type BottomTabsParamsList = {
  [BottomTabsScreens.discover]: undefined;
  [BottomTabsScreens.stars]: undefined;
  [BottomTabsScreens.add]: undefined;
  [BottomTabsScreens.cart]: undefined;
  [BottomTabsScreens.profile]: undefined;
};

export type ScreensList = {
  [key in BottomTabsScreens]:
    | FunctionComponent
    | FunctionComponent<BottomTabScreen<key>>;
};

export type ScreenProps<T extends BottomTabsScreens> = {
  navigation: BottomTabNavigationProp<BottomTabsParamsList, T>;
};

export type ScreenOptions<T extends BottomTabsScreens> = {
  [key in T]:
    | BottomTabNavigationOptions
    | ((props: ScreenProps<key>) => BottomTabNavigationOptions);
};

export type BottomTabScreen<ScreenName extends BottomTabsScreens> =
  BottomTabScreenProps<BottomTabsParamsList, ScreenName>;
