import { TextProps, ViewProps } from 'react-native';

import { IconProps } from '@/src/shared/ui/icon';

export const BADGE_ACCENT = {
  BACKGROUND: 'background',
  TEXT: 'text',
} as const;

export const BADGE_COLOR = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  INFO: 'info',
  WARNING: 'warning',
} as const;

export type BadgeAccent = (typeof BADGE_ACCENT)[keyof typeof BADGE_ACCENT];
export type BadgeColor = (typeof BADGE_COLOR)[keyof typeof BADGE_COLOR];

export interface BadgeRootProps extends ViewProps {
  accentTarget?: BadgeAccent;
  color?: BadgeColor;
}

export type BadgeTextProps = TextProps;

export type BadgeIconProps = IconProps;
