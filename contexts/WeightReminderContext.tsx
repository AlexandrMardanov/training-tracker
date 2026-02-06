import React, { createContext, useContext } from 'react';

import { useWeightReminder } from './hooks/useWeightReminder';

type WeightReminderContextType = {
  shouldShowBadge: boolean;
  refresh: () => void;
};

type WeightReminderProviderProps = {
  children: React.ReactNode;
};

export const WeightReminderContext = createContext<WeightReminderContextType | undefined>(undefined);

export function WeightReminderProvider(props: WeightReminderProviderProps) {
  const { children } = props;

  const { shouldShowBadge, refresh } = useWeightReminder();

  const value = {
    shouldShowBadge,
    refresh,
  };

  return <WeightReminderContext.Provider value={value}>{children}</WeightReminderContext.Provider>;
}

export function useWeightReminderContext() {
  const context = useContext(WeightReminderContext);

  if (context === undefined) {
    throw new Error('useWeightReminderContext має бути використаний всередині WeightReminderProvider');
  }

  return context;
}
