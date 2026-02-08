export function validatePassword(password: string): string | null {
  if (!password) {
    return "Пароль обов'язковий";
  }

  if (password.length < 6) {
    return 'Пароль повинен бути не менше 6 символів';
  }

  return null;
}
