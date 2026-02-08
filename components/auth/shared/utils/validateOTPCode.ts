export function validateOTPCode(code: string): string | null {
  if (!code) {
    return "Код обов'язковий";
  }

  if (code.length !== 8) {
    return 'Код має містити 8 цифр';
  }

  if (!/^\d+$/.test(code)) {
    return 'Код має містити тільки цифри';
  }

  return null;
}
