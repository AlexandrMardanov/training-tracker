import { Input } from '@/components/shared/Input';

type LoginInputsProps = {
  email: string;
  password: string;
  loading: boolean;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
};

export function LoginInputs(props: LoginInputsProps) {
  const { email, password, loading, onEmailChange, onPasswordChange } = props;

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
    </>
  );
}
