import { PressableProps, TextProps } from 'react-native';

import { IconProps } from '@/src/shared/ui/icon';

export const BUTTON_VARIANT = {
  FILLED: 'filled',
  GHOST: 'ghost',
} as const;

export const BUTTON_SIZE = {
  DEFAULT: 'default',
  LARGE: 'large',
} as const;

export const BUTTON_COLOR = {
  PRIMARY: 'brand-primary',
  WARNING: 'error',
  DEFAULT: 'grey-200',
} as const;

export type ButtonVariant = (typeof BUTTON_VARIANT)[keyof typeof BUTTON_VARIANT];
export type ButtonSize = (typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE];
export type ButtonColor = (typeof BUTTON_COLOR)[keyof typeof BUTTON_COLOR];

export interface ButtonProps extends PressableProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  fullWidth?: boolean;
  loading?: boolean;
}

export type ButtonTextProps = TextProps;

export type ButtonIconProps = IconProps;
