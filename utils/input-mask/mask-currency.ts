export const maskCurrency = (value: number) => {
  const options = { minimumFractionDigits: 2 };
  const result = new Intl.NumberFormat('pt-BR', options).format(value);
  return result;
};
