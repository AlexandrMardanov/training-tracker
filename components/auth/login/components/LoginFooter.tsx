import { AuthFooter } from '../../shared/components/AuthFooter';

export function LoginFooter() {
  return <AuthFooter text='Немає облікового запису?' linkText='Зареєструватися' href='/(auth)/signup' />;
}
