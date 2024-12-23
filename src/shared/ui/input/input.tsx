import classNames from 'classnames';
import { forwardRef, useEffect, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { tv } from 'tailwind-variants';

import { Icon } from '@/src/shared/ui/icon';

import { InputContextProvider, useInputContext } from './context';
import {
  INPUT_STATE,
  INPUT_VARIANT,
  InputDescriptionProps,
  InputFieldProps,
  InputFieldWrapProps,
  InputIconProps,
  InputIconWrapProps,
  InputRootProps,
  InputState,
} from './types';

const input = tv({
  slots: {
    base: 'relative flex-col gap-[8]',
    fieldWrap: 'rounded-xs',
    description: 'text-label-md text-grey-500',
  },
  variants: {
    variant: {
      [INPUT_VARIANT.OUTLINED]: {
        fieldWrap:
          'h-[52] flex-row items-center justify-between gap-[12] border border-grey-900 px-[15]',
      },
    },
    state: {
      [INPUT_STATE.DISABLED]: {
        fieldWrap: 'border-grey-200 bg-grey-50',
        description: 'text-grey-600',
      },
      [INPUT_STATE.ERROR]: {
        fieldWrap: 'border-error',
        description: 'text-error',
      },
      [INPUT_STATE.ACTIVE]: {
        fieldWrap: 'border-brand-primary',
        description: 'text-brand-primary',
      },
      [INPUT_STATE.DEFAULT]: {},
    },
  },
});

/**
 * root
 *  fieldWrap
 *    field
 *    iconWrap
 *      icon
 *      icon
 *  description
 */

function InputRoot({
  variant = INPUT_VARIANT.OUTLINED,
  className,
  disabled,
  error,
  ...props
}: InputRootProps) {
  const [value, setValue] = useState('');
  const { base } = input();

  const getState = (): InputState => {
    if (disabled) return INPUT_STATE.DISABLED;
    if (error) return INPUT_STATE.ERROR;
    if (value) return INPUT_STATE.ACTIVE;
    return INPUT_STATE.DEFAULT;
  };

  return (
    <InputContextProvider
      value={{
        state: getState(),
        variant,
        value,
        setValue,
      }}
    >
      <View className={classNames(base(), className)} {...props} />
    </InputContextProvider>
  );
}

function InputFieldWrap({ className, ...props }: InputFieldWrapProps) {
  const { state, variant } = useInputContext();
  const { fieldWrap } = input({ state, variant });

  return <View className={classNames(fieldWrap(), className)} {...props} />;
}

const InputField = forwardRef<TextInput, InputFieldProps>(
  ({ value, onChangeText, className, editable, ...props }, forwardedRef) => {
    const { state, setValue } = useInputContext();
    const isDisabled = state === INPUT_STATE.DISABLED;
    const isError = state === INPUT_STATE.ERROR;

    function handelChangeText(text: string) {
      if (text !== value) {
        setValue(text);
        onChangeText?.(text);
      }
    }

    useEffect(() => {
      if (value !== undefined) {
        setValue(value);
      }
    }, [value, setValue]);

    return (
      <TextInput
        ref={forwardedRef}
        editable={!isDisabled && !editable}
        value={value}
        className={classNames(
          'flex-1 font-regular text-title-md',
          isError && 'text-error placeholder:text-error',
          !!value && 'text-brand-primary',
          className,
        )}
        onChangeText={handelChangeText}
        {...props}
      />
    );
  },
);
InputField.displayName = 'InputField';

function InputIconWrap({ className, ...props }: InputIconWrapProps) {
  return <View className={classNames('flex-row items-center gap-[16]', className)} {...props} />;
}

function InputIcon({ onPress, color, ...props }: InputIconProps) {
  const { state } = useInputContext();
  const isError = state === INPUT_STATE.ERROR;
  const iconColor = isError ? 'error' : 'black';

  if (onPress) {
    return (
      <Pressable hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }} onPress={onPress}>
        <Icon {...props} color={color || iconColor} />
      </Pressable>
    );
  }

  return <Icon {...props} />;
}

function InputDescription({ className, ...props }: InputDescriptionProps) {
  const { state } = useInputContext();
  const { description } = input({ state });

  return <Text className={classNames(description(), className)} {...props} />;
}

export const Input = Object.assign(InputRoot, {
  FieldWrap: InputFieldWrap,
  Field: InputField,
  IconWrap: InputIconWrap,
  Icon: InputIcon,
  Description: InputDescription,
});
