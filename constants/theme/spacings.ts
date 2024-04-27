import { DEFAULT_SIZES } from './sizes';

export interface SpacingFormat {
  XS: number;
  S: number;
  SM: number;
  M: number;
  MD: number;
  L: number;
  XL: number;
  XXL: number;
}

export const DEFAULT_SPACINGS: SpacingFormat = {
  XS: DEFAULT_SIZES.BASE * 0.5, // xs: 4px
  S: DEFAULT_SIZES.BASE * 1, // s: 8px
  SM: DEFAULT_SIZES.BASE * 2, // sm: 16px
  M: DEFAULT_SIZES.BASE * 3, // m: 24px
  MD: DEFAULT_SIZES.BASE * 4, // md: 32px
  L: DEFAULT_SIZES.BASE * 5, // l: 40px
  XL: DEFAULT_SIZES.BASE * 6, // xl: 48px
  XXL: DEFAULT_SIZES.BASE * 7, // xxl: 56px
};
