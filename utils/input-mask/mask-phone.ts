export function maskPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');

  const masked = digits.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

  return masked;
}
