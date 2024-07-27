export function isValidPassword(value: string) {
  const regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?\/\\]).{8,}$/);

  return regex.test(value);
}
