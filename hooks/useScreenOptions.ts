import { useEffect } from 'react';

import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { useNavigation } from 'expo-router';

export function useScreenOptions(options: NativeStackNavigationOptions) {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions(options);
  }, [navigation, options]);
}
