import { SIZES } from './sizes';

export type ISpacingTheme = {
  XS: number;
  S: number;
  SM: number;
  M: number;
  MD: number;
  L: number;
  XL: number;
  XXL: number;
};

export const SPACINGS: ISpacingTheme = {
  XS: SIZES.BASE * 0.5, // xs: 4px
  S: SIZES.BASE * 1, // s: 8px
  SM: SIZES.BASE * 2, // sm: 16px
  M: SIZES.BASE * 3, // m: 24px
  MD: SIZES.BASE * 4, // md: 32px
  L: SIZES.BASE * 5, // l: 40px
  XL: SIZES.BASE * 6, // xl: 48px
  XXL: SIZES.BASE * 7, // xxl: 56px
};
