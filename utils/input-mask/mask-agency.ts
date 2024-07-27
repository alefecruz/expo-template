export const maskAgency = (value: string) => {
  value = value.replace(/\D/g, '');
  return value;
};
