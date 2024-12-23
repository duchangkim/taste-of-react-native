import classNames from 'classnames';
import { View } from 'react-native';
import { tv } from 'tailwind-variants';

import { DIVIDER_DIRECTION, DividerProps } from './types';

const divider = tv({
  base: 'bg-grey-100',
  variants: {
    direction: {
      [DIVIDER_DIRECTION.HORIZONTAL]: 'h-[1] w-full',
      [DIVIDER_DIRECTION.VERTICAL]: 'h-full w-[1]',
    },
  },
});

export function Divider({
  direction = DIVIDER_DIRECTION.HORIZONTAL,
  className,
  ...props
}: DividerProps) {
  return <View className={classNames(divider({ direction }), className)} {...props} />;
}
