import { IDefaultTheme } from './adapter';

import * as THEME from '@/constants/theme';

export interface ISelectTheme {
  color: keyof typeof colorMap;
  size: keyof typeof sizeMap;
  spacing: keyof typeof spacingMap;
}

export const colorMap = {
  default: THEME.DEFAULT_COLORS,
};

export const sizeMap = {
  default: THEME.DEFAULT_SIZES,
};

export const spacingMap = {
  default: THEME.DEFAULT_SPACINGS,
};

export const themeRender = ({
  color = 'default',
  size = 'default',
  spacing = 'default',
}: ISelectTheme): IDefaultTheme => {
  return {
    ...colorMap[color],
    ...sizeMap[size],
    ...spacingMap[spacing],
  };
};
