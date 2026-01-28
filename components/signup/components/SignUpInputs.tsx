import { Input } from '@/components/shared/Input';

type SignUpInputsProps = {
  email: string;
  password: string;
  confirmPassword: string;
  loading: boolean;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onConfirmPasswordChange: (confirmPassword: string) => void;
};

export function SignUpInputs(props: SignUpInputsProps) {
  const { email, password, confirmPassword, loading, onEmailChange, onPasswordChange, onConfirmPasswordChange } = props;

  return (
    <>
      <Input
        placeholder='Електронна пошта'
        value={email}
        onChangeText={onEmailChange}
        autoCapitalize='none'
        keyboardType='email-address'
        editable={!loading}
      />
      <Input
        placeholder='Пароль'
        value={password}
        onChangeText={onPasswordChange}
        secureTextEntry
        editable={!loading}
      />
      <Input
        placeholder='Підтвердіть пароль'
        value={confirmPassword}
        onChangeText={onConfirmPasswordChange}
        secureTextEntry
        editable={!loading}
      />
    </>
  );
}
