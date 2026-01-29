import { useEffect } from 'react';

import { useRouter, useSegments } from 'expo-router';

import { useAuth } from '@/contexts/AuthContext';

export function useAuthRedirect() {
  const { user, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (loading) {
      return;
    }

    const inAuthGroup = segments[0] === '(auth)';

    if (!user && !inAuthGroup) {
      // Redirect to login if not authenticated
      router.replace('/(auth)/login');
    } else if (user && (inAuthGroup || segments[0] === undefined)) {
      // Redirect to main app if authenticated
      router.replace('/(tabs)/dashboard');
    }
  }, [user, loading, segments, router]);

  return { user, loading, segments, router };
}
