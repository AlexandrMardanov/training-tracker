import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import { AppInitialization } from '@/components/shared/AppInitialization';
import { AuthProvider } from '@/contexts/AuthContext';
import { TabBarProvider } from '@/contexts/TabBarContext';
import { WeightReminderProvider } from '@/contexts/WeightReminderContext';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <AuthProvider>
      <WeightReminderProvider>
        <TabBarProvider>
          <StatusBar style='dark' />
          <AppInitialization />
          <Slot />
        </TabBarProvider>
      </WeightReminderProvider>
    </AuthProvider>
  );
}
