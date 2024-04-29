import 'styled-components';
import { IColorTheme, ISizeTheme, ISpacingTheme } from '@/constants/theme';

declare module 'styled-components' {
  type ThemeType = {
    COLORS: IColorTheme;
    SIZES: ISizeTheme;
    SPACINGS: ISpacingTheme;
  };
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
