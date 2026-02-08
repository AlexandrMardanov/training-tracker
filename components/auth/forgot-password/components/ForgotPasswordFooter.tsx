import { AuthFooter } from '../../shared/components/AuthFooter';

export function ForgotPasswordFooter() {
  return <AuthFooter text='Згадали пароль?' linkText='Увійти' href='/(auth)/login' />;
}
