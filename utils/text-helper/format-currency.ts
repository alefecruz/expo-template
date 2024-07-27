export const formatCurrency = (value: number | string | undefined): string => {
  if (typeof value === 'string') value = parseFloat(value);
  if (!value) value = 0;

  return value
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
    .replace('R$', '');
};
