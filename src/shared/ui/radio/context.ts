import { createContext, useContext } from 'react';

import { RadioGroupProps } from './types';

interface RadioContextValue {
  value: RadioGroupProps['value'];
  onChange: (value: RadioGroupProps['value']) => void;
  groupDisabled: boolean;
}

const RadioContext = createContext<RadioContextValue | null>(null);
RadioContext.displayName = 'RadioContext';

export const RadioContextProvider = RadioContext.Provider;

export function useRadioContext() {
  const context = useContext(RadioContext);

  if (!context) {
    throw new Error('Radio.* 컴포넌트는 Radio 내부에서만 사용할 수 있습니다.');
  }

  return context;
}
