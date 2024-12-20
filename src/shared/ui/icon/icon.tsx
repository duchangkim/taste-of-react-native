import { getColorFromToken } from '../color-tokens';
import { iconMap } from './constant';
import { IconProps } from './types';

export function Icon({ name, color = 'black', ...props }: IconProps) {
  const IconComponent = iconMap[name];
  const colorValue = getColorFromToken(color);

  return <IconComponent color={colorValue} {...props} />;
}
