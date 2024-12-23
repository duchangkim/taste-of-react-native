import { createContext, useContext } from 'react';

import { InputState, InputVariant } from './types';

interface InputContextValue {
  variant: InputVariant;
  state: InputState;
  value: string;
  setValue: (value: string) => void;
}

const InputContext = createContext<InputContextValue | null>(null);
InputContext.displayName = 'InputContext';

export const InputContextProvider = InputContext.Provider;

export function useInputContext() {
  const context = useContext(InputContext);

  if (!context) {
    throw new Error('Input.* 컴포넌트는 Input 내부에서만 사용할 수 있습니다.');
  }

  return context;
}
