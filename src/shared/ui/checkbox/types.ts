import { PressableProps, ViewProps } from 'react-native';

export const CHECKBOX_COLOR = {
  DEFAULT: 'default',
  WHITE: 'white',
} as const;

export const CHECKBOX_ACTIVE_COLOR = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  INFO: 'info',
  WARNING: 'warning',
} as const;

export const CHECKBOX_SIZE = {
  MD: 'md',
  LG: 'lg',
} as const;

export type CheckboxColor = (typeof CHECKBOX_COLOR)[keyof typeof CHECKBOX_COLOR];
export type CheckboxActiveColor =
  (typeof CHECKBOX_ACTIVE_COLOR)[keyof typeof CHECKBOX_ACTIVE_COLOR];
export type CheckboxSize = (typeof CHECKBOX_SIZE)[keyof typeof CHECKBOX_SIZE];

export interface CheckboxGroupProps extends ViewProps {
  value: string[];
  onChange: (value: string[]) => void;
  groupDisabled?: boolean;
}

export interface CheckboxItemProps extends PressableProps {
  value: string;
  size?: CheckboxSize;
  color?: CheckboxColor;
  activeColor?: CheckboxActiveColor;
}

export interface CheckboxWrapProps extends PressableProps {
  label: string;
  value: string;
}
