import { Image, StyleSheet, View } from 'react-native';

import { Button } from '@/components/shared/Button';
import { DismissKeyboard } from '@/components/shared/DismissKeyboard';
import { Title } from '@/components/shared/Title';

import { LoginFooter } from './components/LoginFooter';
import { LoginInputs } from './components/LoginInputs';
import { useSignIn } from './hooks/useSignIn';

export function LoginForm() {
  const { email, password, loading, handleSignIn, setEmail, setPassword } = useSignIn();

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Image source={require('@/assets/icon.png')} style={styles.icon} />
          <Title title='Авторизація' subtitle='Увійдіть, щоб продовжити' />
          <LoginInputs
            email={email}
            password={password}
            loading={loading}
            onEmailChange={setEmail}
            onPasswordChange={setPassword}
          />
          <Button title='Увійти' onPress={handleSignIn} loading={loading} disabled={!email || !password} />
          <LoginFooter />
        </View>
      </View>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: 'center',
  },
});
