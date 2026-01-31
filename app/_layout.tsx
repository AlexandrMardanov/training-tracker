import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import { AppInitialization } from '@/components/shared/AppInitialization';
import { AuthProvider } from '@/contexts/AuthContext';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <AuthProvider>
      <StatusBar style='dark' />
      <AppInitialization />
      <Slot />
    </AuthProvider>
  );
}
