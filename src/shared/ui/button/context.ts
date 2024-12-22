import { createContext, useContext } from 'react';

import { ButtonColor, ButtonProps, ButtonSize, ButtonVariant } from './types';

interface ButtonContextValue {
  variant: ButtonVariant;
  size: ButtonSize;
  color: ButtonColor;
  loading?: boolean;
  disabled?: ButtonProps['disabled'];
}

const ButtonContext = createContext<ButtonContextValue | null>(null);
ButtonContext.displayName = 'ButtonContext';

export const ButtonContextProvider = ButtonContext.Provider;

export function useButtonContext() {
  const context = useContext(ButtonContext);

  if (!context) {
    throw new Error('Button.* 컴포넌트는 Button 내부에서만 사용할 수 있습니다.');
  }

  return context;
}
