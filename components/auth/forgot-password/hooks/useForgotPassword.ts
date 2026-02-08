import { useState } from 'react';
import { Alert } from 'react-native';

import { router } from 'expo-router';

import { useAuth } from '@/contexts/AuthContext';

import { validateEmail } from '../../shared/utils/validateEmail';

export function useForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { sendPasswordResetOTP } = useAuth();

  async function handleSendOTP() {
    const emailError = validateEmail(email);
    if (emailError) {
      Alert.alert('Помилка', emailError);
      return;
    }

    setLoading(true);

    try {
      await sendPasswordResetOTP(email);
      router.push({
        pathname: '/(auth)/verify-otp',
        params: { email },
      });
    } catch (error) {
      Alert.alert('Помилка', (error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return { email, loading, handleSendOTP, setEmail };
}
