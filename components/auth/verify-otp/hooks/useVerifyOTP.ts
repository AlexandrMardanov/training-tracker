import { useState } from 'react';
import { Alert } from 'react-native';

import { router, useLocalSearchParams } from 'expo-router';

import { useAuth } from '@/contexts/AuthContext';

import { validateOTPCode } from '../../shared/utils/validateOTPCode';
import { validatePassword } from '../../shared/utils/validatePassword';
import { validatePasswordMatch } from '../../shared/utils/validatePasswordMatch';

export function useVerifyOTP() {
  const params = useLocalSearchParams<{ email: string }>();
  const email = params.email || '';

  const [otpCode, setOtpCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { verifyOTPAndResetPassword } = useAuth();

  async function handleVerifyAndReset() {
    const otpError = validateOTPCode(otpCode);
    if (otpError) {
      Alert.alert('Помилка', otpError);
      return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      Alert.alert('Помилка', passwordError);
      return;
    }

    const passwordMatchError = validatePasswordMatch(password, confirmPassword);
    if (passwordMatchError) {
      Alert.alert('Помилка', passwordMatchError);
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
      Alert.alert('Помилка', (error as Error).message);
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
