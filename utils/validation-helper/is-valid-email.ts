export function isValidEmail(value: string) {
  const regex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
  return regex.test(value);
}
