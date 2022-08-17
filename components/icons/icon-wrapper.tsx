import { Icon } from '@expo/vector-icons/build/createIconSet';

import { IconWrapperProps, IconProps } from '@types';

const iconWrapper =
  (IconPack: Icon<any, any>) => (iconProps: IconWrapperProps) =>
    <IconPack {...(iconProps as any)} size={24} />;

const icon =
  (Icon: ReturnType<typeof iconWrapper>, name: string) =>
  ({ color }: IconProps) =>
    <Icon {...{ name, color }} />;

export { icon, iconWrapper };
