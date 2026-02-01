import { StyleSheet, Text, View } from 'react-native';

import { Input } from '@/components/shared/Input';
import { COLORS } from '@/constants/colors';
import { FONTS } from '@/constants/fonts';

type VerifyOTPInputsProps = {
  email: string;
  otpCode: string;
  password: string;
  confirmPassword: string;
  loading: boolean;
  onOtpCodeChange: (code: string) => void;
  onPasswordChange: (password: string) => void;
  onConfirmPasswordChange: (confirmPassword: string) => void;
};

export function VerifyOTPInputs(props: VerifyOTPInputsProps) {
  const {
    email,
    otpCode,
    password,
    confirmPassword,
    loading,
    onOtpCodeChange,
    onPasswordChange,
    onConfirmPasswordChange,
  } = props;

  return (
    <View>
      <Text style={styles.emailText}>Електронна пошта: {email}</Text>
      <Input
        placeholder='Код з email (8 цифр)'
        value={otpCode}
        onChangeText={onOtpCodeChange}
        keyboardType='number-pad'
        maxLength={8}
        autoCapitalize='none'
        editable={!loading}
      />
      <Input
        placeholder='Новий пароль'
        value={password}
        onChangeText={onPasswordChange}
        secureTextEntry
        autoCapitalize='none'
        editable={!loading}
      />
      <Input
        placeholder='Підтвердіть пароль'
        value={confirmPassword}
        onChangeText={onConfirmPasswordChange}
        secureTextEntry
        autoCapitalize='none'
        editable={!loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  emailText: {
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: COLORS.text.secondary,
    marginBottom: 16,
    textAlign: 'center',
  },
});
