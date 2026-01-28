import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import { AuthRedirect } from '@/components/shared/AuthRedirect';
import { AuthProvider } from '@/contexts/AuthContext';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <AuthProvider>
      <StatusBar style='dark' />
      <AuthRedirect />
      <Slot />
    </AuthProvider>
  );
}
