import { AuthFooter } from '../../shared/components/AuthFooter';

export function SignUpFooter() {
  return <AuthFooter text='Вже маєте обліковий запис?' linkText='Увійти' href='/(auth)/login' />;
}
