export const isValidCPF = (cpf: string): boolean => {
  cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false; // Verifica tamanho e dígitos iguais

  const calculateDigit = (base: number) => {
    let sum = 0;
    for (let i = 0; i < base - 1; i++) {
      sum += parseInt(cpf.charAt(i), 10) * (base - i);
    }
    const remainder = (sum * 10) % 11;
    return remainder === 10 ? 0 : remainder;
  };

  const firstDigit = calculateDigit(10);
  const secondDigit = calculateDigit(11);

  return firstDigit === parseInt(cpf.charAt(9), 10) && secondDigit === parseInt(cpf.charAt(10), 10);
};
