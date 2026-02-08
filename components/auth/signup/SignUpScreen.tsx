import { Image, StyleSheet } from 'react-native';

import { Button } from '@/components/shared/Button';
import { FormContainer } from '@/components/shared/FormContainer';
import { Title } from '@/components/shared/Title';

import { SignUpFooter } from './components/SignUpFooter';
import { SignUpInputs } from './components/SignUpInputs';
import { useSignUp } from './hooks/useSignUp';

export function SignUpScreen() {
  const {
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
  } = useSignUp();

  return (
    <FormContainer>
      <Image source={require('@/assets/push-up-bottom.png')} style={styles.icon} />
      <Title title='Реєстрація' subtitle='Зареєструйтеся, щоб почати' />
      <SignUpInputs
        name={name}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        loading={loading}
        onNameChange={setName}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onConfirmPasswordChange={setConfirmPassword}
      />
      <Button
        title='Зареєструватися'
        onPress={handleSignUp}
        loading={loading}
        disabled={!name || !email || !password || !confirmPassword}
      />
      <SignUpFooter />
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
