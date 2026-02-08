import * as authService from '@/lib/auth-service';

export function useAuthOperations() {
  async function signIn(email: string, password: string) {
    await authService.signIn({ email, password });
  }

  async function signUp(email: string, password: string, name: string) {
    await authService.signUp({ email, password, name });
  }

  async function signOut() {
    await authService.signOut();
  }

  async function sendPasswordResetOTP(email: string) {
    await authService.sendPasswordResetOTP(email);
  }

  async function verifyOTPAndResetPassword(email: string, token: string, newPassword: string) {
    await authService.verifyOTPAndResetPassword({ email, token, newPassword });
  }

  async function updatePassword(newPassword: string) {
    await authService.updatePassword(newPassword);
  }

  return {
    signIn,
    signUp,
    signOut,
    sendPasswordResetOTP,
    verifyOTPAndResetPassword,
    updatePassword,
  };
}
