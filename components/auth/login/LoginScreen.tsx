import { Image, StyleSheet } from 'react-native';

import { Button } from '@/components/shared/Button';
import { FormContainer } from '@/components/shared/FormContainer';
import { Title } from '@/components/shared/Title';

import { ForgotPasswordLink } from './components/ForgotPasswordLink';
import { LoginFooter } from './components/LoginFooter';
import { LoginInputs } from './components/LoginInputs';
import { useLogin } from './hooks/useLogin';

export function LoginScreen() {
  const { email, password, loading, handleLogin, setEmail, setPassword } = useLogin();

  return (
    <FormContainer>
      <Image source={require('@/assets/push-up-top.png')} style={styles.icon} />
      <Title title='Авторизація' subtitle='Увійдіть, щоб продовжити' />
      <LoginInputs
        email={email}
        password={password}
        loading={loading}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
      />
      <ForgotPasswordLink />
      <Button title='Увійти' onPress={handleLogin} loading={loading} disabled={!email || !password} />
      <LoginFooter />
    </FormContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: 'center',
  },
});
