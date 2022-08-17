import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { BottomTabsParamsList } from '@types';

export default () =>
  useNavigation<BottomTabNavigationProp<BottomTabsParamsList>>();
