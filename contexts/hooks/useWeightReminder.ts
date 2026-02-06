import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { useAuth } from '@/contexts/AuthContext';
import { getWeightEntries } from '@/lib/weight-service';

export function useWeightReminder() {
  const { user } = useAuth();
  const [shouldShowBadge, setShouldShowBadge] = useState(false);
  const [lastCheckTime, setLastCheckTime] = useState(0);

  const checkLastEntry = useCallback(async () => {
    if (!user) {
      setShouldShowBadge(false);
      return;
    }

    try {
      const entries = await getWeightEntries(user.id);

      if (entries.length === 0) {
        setShouldShowBadge(true);
        return;
      }

      const lastEntry = entries[0]; // Entries are sorted by date descending
      const lastEntryDate = new Date(lastEntry.date);
      const today = new Date();
      const daysDifference = Math.floor((today.getTime() - lastEntryDate.getTime()) / (1000 * 60 * 60 * 24));

      setShouldShowBadge(daysDifference >= 7);
    } catch (error) {
      Alert.alert('Помилка', (error as Error).message);
      setShouldShowBadge(false);
    }
  }, [user]);

  useEffect(() => {
    checkLastEntry();
  }, [checkLastEntry, lastCheckTime]);

  const refresh = () => {
    setLastCheckTime(Date.now());
  };

  return { shouldShowBadge, refresh };
}
