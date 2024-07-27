export const maskBankAccount = (value: string) => {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{7})(\d)/g, '$1-$2');
  return value;
};
