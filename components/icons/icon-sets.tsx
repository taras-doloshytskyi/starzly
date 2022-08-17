import {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  Ionicons
} from '@expo/vector-icons';
import { iconWrapper } from './icon-wrapper';

export default {
  Ant: iconWrapper(AntDesign),
  Feather: iconWrapper(Feather),
  Material: iconWrapper(MaterialCommunityIcons),
  Ionicons: iconWrapper(Ionicons)
};
