import classNames from 'classnames';
import { ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';
import { tv } from 'tailwind-variants';

import { RadioContextProvider, useRadioContext } from './context';
import { RADIO_COLOR, RADIO_SIZE, RadioGroupProps, RadioItemProps, RadioWrapProps } from './types';

// TODO 애니메이션 필요

const radio = tv({
  slots: {
    item: 'items-center justify-center rounded-full border-2',
    indicator: 'rounded-full',
  },
  variants: {
    color: {
      [RADIO_COLOR.DEFAULT]: {
        item: 'border-grey-400',
        indicator: 'bg-grey-400',
      },
      [RADIO_COLOR.PRIMARY]: {
        item: 'border-brand-primary',
        indicator: 'bg-brand-primary',
      },
      [RADIO_COLOR.WARNING]: {
        item: 'border-error',
        indicator: 'bg-error',
      },
    },
    size: {
      [RADIO_SIZE.LG]: {
        item: 'h-[28] w-[28]',
        indicator: 'h-[10] w-[10]',
      },
      [RADIO_SIZE.MD]: {
        item: 'h-[24] w-[24]',
        indicator: 'h-[8] w-[8]',
      },
    },
    disabled: {
      true: {
        item: 'opacity-60',
        indicator: 'opacity-60',
      },
      false: {
        item: 'active:opacity-70',
        indicator: 'active:opacity-70',
      },
    },
  },
});

function RadioGroup({ value, onChange, groupDisabled, ...props }: RadioGroupProps) {
  return (
    <RadioContextProvider value={{ value, onChange, groupDisabled: !!groupDisabled }}>
      <View {...props} />
    </RadioContextProvider>
  );
}

function RadioItem({
  value,
  className,
  size = RADIO_SIZE.MD,
  color = RADIO_COLOR.DEFAULT,
  disabled,
  ...props
}: RadioItemProps) {
  const { item, indicator } = radio({ size, color, disabled: !!disabled });
  const { onChange, groupDisabled, ...context } = useRadioContext();

  const checked = value === context.value;

  function handleOnPress() {
    if (checked) {
      return;
    }

    onChange(value);
  }

  return (
    <Pressable
      className={classNames(item(), className)}
      disabled={groupDisabled || disabled}
      onPress={handleOnPress}
      {...props}
    >
      {checked && <View className={indicator()}></View>}
    </Pressable>
  );
}

function RadioWrap({ label, value, disabled, children, className, ...props }: RadioWrapProps) {
  const { onChange, groupDisabled, ...context } = useRadioContext();

  const checked = value === context.value;

  function handleOnPress() {
    if (checked) {
      return;
    }

    onChange(value);
  }

  return (
    <Pressable
      disabled={groupDisabled || disabled}
      className={classNames(
        'flex-row items-center justify-between rounded-md border-2 bg-white p-[14] shadow-md',
        checked ? 'border-brand-primary' : 'border-transparent',
        className,
      )}
      onPress={handleOnPress}
      {...props}
    >
      {label && (
        <Text
          className={classNames(
            'font-bold text-body-lg',
            checked ? 'text-brand-primary' : 'text-grey-500',
          )}
        >
          {label}
        </Text>
      )}
      {children as ReactNode}
      <RadioItem
        color={checked ? RADIO_COLOR.PRIMARY : RADIO_COLOR.DEFAULT}
        value={value}
      ></RadioItem>
    </Pressable>
  );
}

export const Radio = {
  Group: RadioGroup,
  Item: RadioItem,
  Wrap: RadioWrap,
};
