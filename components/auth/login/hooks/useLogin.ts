import { useState } from 'react';
import { Alert } from 'react-native';

import { useAuth } from '@/contexts/AuthContext';

export function useLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  async function handleLogin() {
    if (!email || !password) {
      return;
    }

    setLoading(true);

    try {
      await signIn(email, password);
    } catch (error) {
      Alert.alert('Помилка', (error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return { email, password, loading, handleLogin, setEmail, setPassword };
}
