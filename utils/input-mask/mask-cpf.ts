export const maskCPF = (value: string) => {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{3})(\d)/g, '$1.$2');
  value = value.replace(/^(\d{3})\.(\d{3})(\d)/g, '$1.$2.$3');
  value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/g, '$1.$2.$3-$4');
  return value;
};
