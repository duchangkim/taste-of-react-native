import { createContext, useContext } from 'react';

import { BadgeAccent, BadgeColor } from './types';

interface BadgeContextValue {
  accentTarget: BadgeAccent;
  color: BadgeColor;
}

const BadgeContext = createContext<BadgeContextValue | null>(null);
BadgeContext.displayName = 'BadgeContext';

export const BadgeContextProvider = BadgeContext.Provider;

export function useBadgeContext() {
  const context = useContext(BadgeContext);

  if (!context) {
    throw new Error('Badge.* 컴포넌트는 Badge 내부에서만 사용할 수 있습니다.');
  }

  return context;
}
