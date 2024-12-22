import classNames from 'classnames';
import { Pressable, Text } from 'react-native';
import { tv } from 'tailwind-variants';

import { Icon } from '@/src/shared/ui/icon';

import { ButtonContextProvider, useButtonContext } from './context';
import {
  BUTTON_COLOR,
  BUTTON_SIZE,
  BUTTON_VARIANT,
  ButtonIconProps,
  ButtonProps,
  ButtonTextProps,
} from './types';

const buttonRoot = tv({
  base: 'rounded-xs',
  variants: {
    variant: {
      [BUTTON_VARIANT.FILLED]: 'flex-row items-center justify-center gap-[12]',
      [BUTTON_VARIANT.GHOST]: 'flex-col items-center gap-[12]',
    },
    size: {
      [BUTTON_SIZE.DEFAULT]: 'px-[16] py-[14]',
      [BUTTON_SIZE.LARGE]: 'px-[16] py-[18]',
    },
    color: {
      [BUTTON_COLOR.DEFAULT]: 'bg-grey-200',
      [BUTTON_COLOR.PRIMARY]: 'bg-brand-primary',
      [BUTTON_COLOR.WARNING]: 'bg-error',
    },
    disabled: {
      true: 'opacity-60',
      false: 'active:opacity-70',
    },
    fullWidth: {
      true: 'w-full',
      false: 'self-start',
    },
  },
  compoundVariants: [
    {
      variant: BUTTON_VARIANT.GHOST,
      size: [...Object.values(BUTTON_SIZE)],
      className: 'bg-transparent px-[24] py-0',
    },
    {
      variant: BUTTON_VARIANT.GHOST,
      disabled: false,
      className: 'active:bg-grey-200',
    },
  ],
  defaultVariants: {
    variant: BUTTON_VARIANT.FILLED,
    size: BUTTON_SIZE.DEFAULT,
  },
});

function ButtonRoot({
  variant = BUTTON_VARIANT.FILLED,
  size = BUTTON_SIZE.DEFAULT,
  color = BUTTON_COLOR.DEFAULT,
  fullWidth = false,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <ButtonContextProvider value={{ variant, size, color, disabled }}>
      <Pressable
        className={classNames(
          buttonRoot({
            variant,
            size,
            color,
            fullWidth,
            disabled: !!disabled,
          }),
          className,
        )}
        {...props}
      >
        {children}
      </Pressable>
    </ButtonContextProvider>
  );
}

function ButtonIcon({ ...props }: ButtonIconProps) {
  const { variant, color } = useButtonContext();

  const iconSize = variant === BUTTON_VARIANT.GHOST ? 40 : 24;

  return (
    <Icon
      color={color === BUTTON_COLOR.DEFAULT ? 'black' : 'white'}
      height={iconSize}
      width={iconSize}
      {...props}
    />
  );
}

function ButtonText({ className, ...props }: ButtonTextProps) {
  const { variant, color } = useButtonContext();

  return (
    <Text
      className={classNames(
        'font-bold text-black',
        variant === BUTTON_VARIANT.FILLED && 'text-title-lg',
        variant === BUTTON_VARIANT.GHOST && 'text-body-lg',

        color !== BUTTON_COLOR.DEFAULT && 'text-white',
        className,
      )}
      {...props}
    ></Text>
  );
}

export const Button = Object.assign(ButtonRoot, {
  Icon: ButtonIcon,
  Text: ButtonText,
});
