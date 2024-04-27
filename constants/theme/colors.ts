import { ICSSProp } from '@/libs/style';

export interface IColorTheme {
  ACCENTED: ICSSProp;
  PRIMARY: ICSSProp;
  SECONDARY: ICSSProp;
  DISABLED: ICSSProp;
  DANGER: ICSSProp;
  LIGHT: ICSSProp;
  DARK: ICSSProp;
}

export const DEFAULT_COLORS: IColorTheme = {
  ACCENTED: '#41A152',
  PRIMARY: '#4B4B4B',
  SECONDARY: '#E1E1E1',

  DISABLED: '#EAEAEA',
  DANGER: '#C9252D',

  LIGHT: '#FFFFFF',
  DARK: '#000000',
};
