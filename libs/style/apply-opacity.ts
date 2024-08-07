const opacityMap = {
  '0%': '00',
  '5%': '0C',
  '10%': '19',
  '15%': '26',
  '20%': '33',
  '25%': '3F',
  '30%': '4C',
  '35%': '59',
  '40%': '66',
  '45%': '72',
  '50%': '7F',
  '55%': '8C',
  '60%': '99',
  '65%': 'A5',
  '70%': 'B2',
  '75%': 'BF',
  '80%': 'CC',
  '85%': 'D8',
  '90%': 'E5',
  '95%': 'F2',
  '100%': 'FF',
};

type IOpacityValues = keyof typeof opacityMap;

export const applyOpacity = (hex: string, opacity: IOpacityValues) => {
  if (!hex) return '';
  if (!opacityMap[opacity]) return hex;

  return hex + opacityMap[opacity];
};
