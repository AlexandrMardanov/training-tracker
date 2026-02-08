export function validateName(name: string): string | null {
  if (!name) {
    return "Ім'я обов'язкове";
  }

  if (name.trim().length < 2) {
    return "Ім'я повинно містити мінімум 2 символи";
  }

  return null;
}
