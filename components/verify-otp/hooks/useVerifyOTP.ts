import { useState } from 'react';
import { Alert } from 'react-native';

import { router, useLocalSearchParams } from 'expo-router';

import { useAuth } from '@/contexts/AuthContext';

export function useVerifyOTP() {
  const params = useLocalSearchParams<{ email: string }>();
  const email = params.email || '';

  const [otpCode, setOtpCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { verifyOTPAndResetPassword } = useAuth();

  async function handleVerifyAndReset() {
    if (!otpCode || !password || !confirmPassword) {
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Помилка', 'Паролі не співпадають');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Помилка', 'Пароль має бути мінімум 6 символів');
      return;
    }

    if (otpCode.length !== 8) {
      Alert.alert('Помилка', 'Код має містити 8 цифр');
      return;
    }

    setLoading(true);

    try {
      await verifyOTPAndResetPassword(email, otpCode, password);
      Alert.alert('Успіх', 'Пароль успішно змінено', [
        {
          text: 'OK',
          onPress: () => router.replace('/(auth)/login'),
        },
      ]);
    } catch (error) {
      console.error('Помилка верифікації OTP:', error);
      Alert.alert('Помилка', 'Невірний код або код застарів. Спробуйте ще раз.');
    } finally {
      setLoading(false);
    }
  }

  return {
    email,
    otpCode,
    password,
    confirmPassword,
    loading,
    handleVerifyAndReset,
    setOtpCode,
    setPassword,
    setConfirmPassword,
  };
}
