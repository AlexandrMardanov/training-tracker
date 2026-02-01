import { Stack } from 'expo-router';

import { COLORS } from '@/constants/colors';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: COLORS.background.primary },
      }}
    >
      <Stack.Screen name='login' />
      <Stack.Screen name='signup' />
      <Stack.Screen name='forgot-password' />
      <Stack.Screen name='verify-otp' />
    </Stack>
  );
}
