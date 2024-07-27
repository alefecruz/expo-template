export const ocultMaskCNPJ = (value: string) => {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{7})(\d{2})(\d{3})(\d{1})(\d)/g, '*** . *** . *$2/$3* -$5');
  return value;
};

export const ocultMaskCNPJFormated = (value: string) => {
  return value.replace(/(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})-(\d{2})/, '***.***.$3/$4-$5');
};
