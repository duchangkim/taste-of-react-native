import classNames from 'classnames';
import { Pressable, Text, View } from 'react-native';
import { tv } from 'tailwind-variants';

import { ColorToken } from '@/src/shared/ui/color-tokens';
import { Icon } from '@/src/shared/ui/icon';

import { CheckboxContextProvider, useCheckboxContext } from './context';
import {
  CHECKBOX_ACTIVE_COLOR,
  CHECKBOX_COLOR,
  CHECKBOX_SIZE,
  CheckboxActiveColor,
  CheckboxColor,
  CheckboxGroupProps,
  CheckboxItemProps,
  CheckboxSize,
  CheckboxWrapProps,
} from './types';

function iconSize(size: CheckboxSize) {
  return {
    [CHECKBOX_SIZE.LG]: {
      width: 16,
      height: 16,
    },
    [CHECKBOX_SIZE.MD]: {
      width: 14,
      height: 14,
    },
  }[size];
}

function iconColor(
  color: CheckboxColor,
  activeColor: CheckboxActiveColor,
  isActive: boolean,
): ColorToken {
  const isWhite = color === CHECKBOX_COLOR.WHITE;

  if ((isWhite && !isActive) || (color === CHECKBOX_COLOR.DEFAULT && isActive)) {
    return 'white';
  }

  if (isWhite && isActive) {
    return (
      {
        [CHECKBOX_ACTIVE_COLOR.PRIMARY]: 'brand-primary',
        [CHECKBOX_ACTIVE_COLOR.SECONDARY]: 'brand-secondary',
        [CHECKBOX_ACTIVE_COLOR.INFO]: 'info',
        [CHECKBOX_ACTIVE_COLOR.WARNING]: 'error',
      } as const
    )[activeColor];
  }

  return 'grey-400';
}

const checkbox = tv({
  base: 'items-center justify-center rounded-sm border-2 font-bold',
  variants: {
    color: {
      [CHECKBOX_COLOR.DEFAULT]: 'border-grey-400',
      [CHECKBOX_COLOR.WHITE]: 'border-white',
    },
    size: {
      [CHECKBOX_SIZE.LG]: 'h-[28] w-[28]',
      [CHECKBOX_SIZE.MD]: 'h-[24] w-[24]',
    },
    active: {
      true: 'border-brand-primary bg-brand-primary',
      false: '',
    },
    disabled: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      color: CHECKBOX_COLOR.WHITE,
      active: true,
      className: 'border-white bg-white',
    },
  ],
});

function CheckboxGroup({ value, onChange, groupDisabled, ...props }: CheckboxGroupProps) {
  return (
    <CheckboxContextProvider value={{ value, onChange, groupDisabled: !!groupDisabled }}>
      <View {...props} />
    </CheckboxContextProvider>
  );
}

function CheckboxItem({
  value,
  className,
  disabled,
  size = CHECKBOX_SIZE.MD,
  color = CHECKBOX_COLOR.DEFAULT,
  activeColor = CHECKBOX_ACTIVE_COLOR.PRIMARY,
  ...props
}: CheckboxItemProps) {
  const { onChange, groupDisabled, ...context } = useCheckboxContext();
  const checked = context.value.includes(value);
  const { width, height } = iconSize(size);

  function handleCheckboxItemPress() {
    if (checked) {
      onChange(context.value.filter((checkedItem) => checkedItem !== value));

      return;
    }

    onChange([...context.value, value]);
  }

  return (
    <Pressable
      disabled={groupDisabled || disabled}
      className={classNames(
        checkbox({
          size,
          color,
          active: checked,
          disabled: groupDisabled || !!disabled,
        }),
        className,
      )}
      onPress={handleCheckboxItemPress}
      {...props}
    >
      <Icon
        color={iconColor(color, activeColor, checked)}
        height={height}
        name="check"
        width={width}
      ></Icon>
    </Pressable>
  );
}

function CheckboxWrap({ value, disabled, label, ...props }: CheckboxWrapProps) {
  const { onChange, groupDisabled, ...context } = useCheckboxContext();
  const checked = context.value.includes(value);

  function handleCheckboxWrapPress() {
    if (checked) {
      onChange(context.value.filter((checkedItem) => checkedItem !== value));

      return;
    }

    onChange([...context.value, value]);
  }

  return (
    <Pressable
      disabled={groupDisabled || disabled}
      className={classNames(
        'flex-row items-center justify-between rounded-lg border-2 bg-white p-[14] shadow-md',
        checked ? 'border-brand-primary' : 'border-transparent',
      )}
      onPress={handleCheckboxWrapPress}
      {...props}
    >
      {label && <Text className={classNames('font-medium text-body-md text-black')}>{label}</Text>}
      <CheckboxItem size={CHECKBOX_SIZE.LG} value={value} />
    </Pressable>
  );
}

export const Checkbox = {
  Group: CheckboxGroup,
  Item: CheckboxItem,
  Wrap: CheckboxWrap,
};
