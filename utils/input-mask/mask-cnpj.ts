export function maskCNPJ(cnpj: string): string {
  cnpj = cnpj.replace(/\D/g, '');

  if (cnpj.length !== 14) {
    return cnpj;
  }

  return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
}
