import { Image, StyleSheet } from 'react-native';

import { Button } from '@/components/shared/Button';
import { FormContainer } from '@/components/shared/FormContainer';
import { Title } from '@/components/shared/Title';

import { VerifyOTPInputs } from './components/VerifyOTPInputs';
import { useVerifyOTP } from './hooks/useVerifyOTP';

export function VerifyOTPScreen() {
  const {
    email,
    otpCode,
    password,
    confirmPassword,
    loading,
    handleVerifyAndReset,
    setOtpCode,
    setPassword,
    setConfirmPassword,
  } = useVerifyOTP();

  return (
    <FormContainer>
      <Image source={require('@/assets/icon.png')} style={styles.icon} />
      <Title title='Введіть код' subtitle='Код надіслано на вашу пошту' />
      <VerifyOTPInputs
        email={email}
        otpCode={otpCode}
        password={password}
        confirmPassword={confirmPassword}
        loading={loading}
        onOtpCodeChange={setOtpCode}
        onPasswordChange={setPassword}
        onConfirmPasswordChange={setConfirmPassword}
      />
      <Button
        title='Змінити пароль'
        onPress={handleVerifyAndReset}
        loading={loading}
        disabled={!otpCode || !password || !confirmPassword || loading}
      />
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
