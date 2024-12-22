import { PressableProps, ViewProps } from 'react-native';

export const RADIO_SIZE = {
  MD: 'md',
  LG: 'lg',
} as const;

export const RADIO_COLOR = {
  PRIMARY: 'brand-primary',
  DEFAULT: 'grey-400',
  WARNING: 'error',
} as const;

export type RadioSize = (typeof RADIO_SIZE)[keyof typeof RADIO_SIZE];
export type RadioColor = (typeof RADIO_COLOR)[keyof typeof RADIO_COLOR];

export interface RadioGroupProps extends ViewProps {
  value: string;
  onChange: (value: RadioGroupProps['value']) => void;
  groupDisabled?: boolean;
}

export interface RadioItemProps extends PressableProps {
  size?: RadioSize;
  color?: RadioColor;
  value: RadioGroupProps['value'];
}

export interface RadioWrapProps extends PressableProps {
  label: string;
  value: RadioGroupProps['value'];
}
