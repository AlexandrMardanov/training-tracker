import { StyleSheet, View } from 'react-native';

import { SignUpForm } from '@/components/signup/SignUpForm';

export default function SignUp() {
  return (
    <View style={styles.container}>
      <SignUpForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
