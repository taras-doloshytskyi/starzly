import { FC } from 'react';
import Svg, { G, Circle, Path, SvgProps } from 'react-native-svg';

import { IconProps } from '@types';

import IconSet from './icon-sets';
import { icon } from './icon-wrapper';

const CompassIcon = icon(IconSet.Feather, 'compass');

const SearchIcon = icon(IconSet.Feather, 'search');

const PlusSquareIcon = icon(IconSet.Feather, 'plus-square');

const CartIcon = icon(IconSet.Feather, 'shopping-cart');

const AccountIcon = icon(IconSet.Material, 'account-circle-outline');

const MuteIcon = icon(IconSet.Material, 'volume-mute');

const StarIcon = icon(IconSet.Ant, 'star');

const AddVideoIcon = icon(IconSet.Material, 'video-plus-outline');

const CloseIcon = icon(IconSet.Ant, 'close');

const CheckmarkIcon = icon(IconSet.Ionicons, 'checkmark-circle');

const LikeIcon: FC<SvgProps> = (props) => (
  <Svg width={22} height={20} {...props}>
    <Path
      d="M21.79 6.398C21.79 2.88 19.308 0 15.872 0c-2.426 0-4.083 1.207-4.978 2.103C9.999 1.207 8.342 0 5.916 0 2.482 0 0 2.879 0 6.398c0 1.84.709 3.539 2.23 5.35 1.334 1.587 3.252 3.223 5.473 5.116.821.701 1.67 1.426 2.574 2.216a.935.935 0 0 0 1.235 0 262.9 262.9 0 0 1 2.575-2.216c2.22-1.893 4.138-3.529 5.472-5.117 1.522-1.81 2.23-3.51 2.23-5.35zm-3.666 4.143c-1.234 1.469-3.008 2.981-5.254 4.897-.637.543-1.291 1.1-1.975 1.694a335.936 335.936 0 0 0-1.976-1.694c-2.246-1.916-4.02-3.428-5.254-4.897-1.238-1.473-1.79-2.751-1.79-4.143 0-2.579 1.737-4.523 4.041-4.523 1.134 0 2.176.36 3.098 1.067a5.227 5.227 0 0 1 1.092 1.118c.026.041-.133-.167 1.955 2.554a.937.937 0 1 0 1.488-1.14l-1.464-1.91c.6-.643 1.868-1.689 3.788-1.689 2.426 0 4.041 2.082 4.041 4.523 0 1.392-.552 2.67-1.79 4.143z"
      fill={props.fill}
    />
  </Svg>
);

const CommentIcon: FC<SvgProps> = (props) => (
  <Svg width={24} height={24} {...props}>
    <G fill={props.fill || '#ffffff'}>
      <Path d="m23.977 22.87-1.541-5.016a11.985 11.985 0 1 0-4.075 4.28l4.443 1.781a.856.856 0 0 0 .856-.162.856.856 0 0 0 .317-.882zm-3.288-4.887 1.105 3.68-3.21-1.283a.856.856 0 0 0-.797.094 10.359 10.359 0 1 1 2.988-3.176.856.856 0 0 0-.086.685z" />
      <Circle cx={11.991} cy={11.99} r={1.712} />
      <Circle cx={17.984} cy={11.99} r={1.712} />
      <Circle cx={5.999} cy={11.99} r={1.712} />
    </G>
  </Svg>
);

export {
  CompassIcon,
  SearchIcon,
  PlusSquareIcon,
  CartIcon,
  AccountIcon,
  MuteIcon,
  StarIcon,
  AddVideoIcon,
  CloseIcon,
  CheckmarkIcon,
  LikeIcon,
  CommentIcon
};
