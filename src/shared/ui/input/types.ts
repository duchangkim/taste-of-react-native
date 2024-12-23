import { GestureResponderEvent, TextInputProps, ViewProps } from 'react-native';
import { TextProps } from 'react-native';

import { IconProps } from '@/src/shared/ui/icon';

export const INPUT_VARIANT = {
  OUTLINED: 'outlined',
} as const;

export const INPUT_STATE = {
  DEFAULT: 'default',
  ACTIVE: 'active',
  ERROR: 'error',
  DISABLED: 'disabled',
} as const;

export type InputVariant = (typeof INPUT_VARIANT)[keyof typeof INPUT_VARIANT];
export type InputState = (typeof INPUT_STATE)[keyof typeof INPUT_STATE];

export interface InputRootProps extends ViewProps {
  variant?: InputVariant;
  disabled?: boolean;
  error?: boolean;
}

export type InputFieldWrapProps = ViewProps;

export interface InputFieldProps extends TextInputProps {
  disabled?: boolean;
  error?: boolean;
  withoutClearButton?: boolean;
}
export type InputIconWrapProps = ViewProps;

export interface InputIconProps extends IconProps {
  onPress?: (event: GestureResponderEvent) => void;
}

export type InputDescriptionProps = TextProps;
