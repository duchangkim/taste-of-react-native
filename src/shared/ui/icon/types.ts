import { SvgProps } from 'react-native-svg';

import { ColorToken } from '../color-tokens';
import { iconMap } from './constant';

export type IconNames = keyof typeof iconMap;

export interface IconProps extends SvgProps {
  name: IconNames;
  color?: ColorToken;
}
