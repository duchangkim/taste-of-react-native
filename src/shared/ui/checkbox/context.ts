import { createContext, useContext } from 'react';

interface CheckboxContextValue {
  value: string[];
  onChange: (value: string[]) => void;
  groupDisabled: boolean;
}

const CheckboxContext = createContext<CheckboxContextValue | null>(null);
CheckboxContext.displayName = 'CheckboxContext';

export const CheckboxContextProvider = CheckboxContext.Provider;

export function useCheckboxContext() {
  const context = useContext(CheckboxContext);

  if (!context) {
    throw new Error('Checkbox.* 컴포넌트는 Checkbox 내부에서만 사용할 수 있습니다.');
  }

  return context;
}
