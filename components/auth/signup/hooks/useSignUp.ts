import { useState } from 'react';
import { Alert } from 'react-native';

import { useAuth } from '@/contexts/AuthContext';

import { validateEmail } from '../../shared/utils/validateEmail';
import { validateName } from '../../shared/utils/validateName';
import { validatePassword } from '../../shared/utils/validatePassword';
import { validatePasswordMatch } from '../../shared/utils/validatePasswordMatch';

export function useSignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();

  async function handleSignUp() {
    const nameError = validateName(name);
    if (nameError) {
      Alert.alert('Помилка', nameError);
      return;
    }

    const emailError = validateEmail(email);
    if (emailError) {
      Alert.alert('Помилка', emailError);
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
      await signUp(email, password, name);
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      Alert.alert('Помилка', (error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    handleSignUp,
  };
}
