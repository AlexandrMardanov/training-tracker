export function validateEmail(email: string): string | null {
  if (!email) {
    return "Email обов'язковий";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Невірний формат email';
  }

  return null;
}
