import { useState } from 'react';
import { Alert } from 'react-native';

import { router } from 'expo-router';

import { useAuth } from '@/contexts/AuthContext';

export function useForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { sendPasswordResetOTP } = useAuth();

  async function handleSendOTP() {
    if (!email) {
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
      console.error('Помилка відправки OTP:', error);
      Alert.alert('Помилка', 'Виникла помилка при відправці коду. Перевірте email.');
    } finally {
      setLoading(false);
    }
  }

  return { email, loading, handleSendOTP, setEmail };
}
