import { ViewProps } from 'react-native';

export const DIVIDER_DIRECTION = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as const;

export type DividerDirection = (typeof DIVIDER_DIRECTION)[keyof typeof DIVIDER_DIRECTION];

export interface DividerProps extends Omit<ViewProps, 'children'> {
  direction?: DividerDirection;
}
