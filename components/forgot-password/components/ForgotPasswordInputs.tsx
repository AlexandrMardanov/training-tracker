import { View } from 'react-native';

import { Input } from '@/components/shared/Input';

type ForgotPasswordInputsProps = {
  email: string;
  loading: boolean;
  onEmailChange: (email: string) => void;
};

export function ForgotPasswordInputs(props: ForgotPasswordInputsProps) {
  const { email, loading, onEmailChange } = props;

  return (
    <View>
      <Input
        placeholder='Email'
        value={email}
        onChangeText={onEmailChange}
        keyboardType='email-address'
        autoCapitalize='none'
        editable={!loading}
      />
    </View>
  );
}
