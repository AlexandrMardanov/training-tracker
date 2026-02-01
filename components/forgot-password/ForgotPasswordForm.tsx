import { Image, StyleSheet } from 'react-native';

import { Button } from '@/components/shared/Button';
import { FormContainer } from '@/components/shared/FormContainer';
import { Title } from '@/components/shared/Title';

import { ForgotPasswordFooter } from './components/ForgotPasswordFooter';
import { ForgotPasswordInputs } from './components/ForgotPasswordInputs';
import { useForgotPassword } from './hooks/useForgotPassword';

export function ForgotPasswordForm() {
  const { email, loading, handleSendOTP, setEmail } = useForgotPassword();

  return (
    <FormContainer>
      <Image source={require('@/assets/icon.png')} style={styles.icon} />
      <Title title='Відновлення пароля' subtitle='Отримайте код на email' />
      <ForgotPasswordInputs email={email} loading={loading} onEmailChange={setEmail} />
      <Button title='Отримати код' onPress={handleSendOTP} loading={loading} disabled={!email || loading} />
      <ForgotPasswordFooter />
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
