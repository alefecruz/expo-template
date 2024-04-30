import { ITextProps } from './Text';

import { styled, css, IDefaultTheme } from '@/libs/style';

export type ITextVariants = {
  format: keyof typeof FORMATS;
  color: keyof IDefaultTheme['COLORS'];
  fontStyle: keyof typeof FONT_STYLES;
  letterCase: keyof typeof LETTER_CASES;
  align: keyof typeof ALIGNS;
};

export const FORMATS = {
  H1: css`
    font-size: ${({ theme }) => theme.SIZES.H1}px;
    font-weight: 600;
  `,
  H2: css`
    font-size: ${({ theme }) => theme.SIZES.H1}px;
  `,
  H3: css`
    font-size: ${({ theme }) => theme.SIZES.H3}px;
  `,
  H4: css`
    font-size: ${({ theme }) => theme.SIZES.H4}px;
  `,
  H5: css`
    font-size: ${({ theme }) => theme.SIZES.H5}px;
  `,
  PARAGRAPH: css`
    font-size: ${({ theme }) => theme.SIZES.PARAGRAPH}px;
  `,
  STANDARD: css`
    font-size: ${({ theme }) => theme.SIZES.STANDARD}px;
  `,
};

export const FONT_STYLES = {
  ITALIC: css`
    font-style: italic;
  `,
  NONE: css`
    font-style: normal;
  `,
};

export const LETTER_CASES = {
  UPPER_CASE: css`
    text-transform: uppercase;
  `,
  LOWER_CASE: css`
    text-transform: lowercase;
  `,
  CAPTALIZE: css``,
  NONE: css`
    text-transform: normal;
  `,
};

export const ALIGNS = {
  LEFT: css`
    text-align: left;
  `,
  CENTER: css`
    text-align: center;
  `,
  RIGHT: css`
    text-align: right;
  `,
  JUSTIFY: css`
    text-align: justify;
  `,
};

export const TextComponent = styled.Text<ITextProps>`
  ${({ format }) => (format ? FORMATS[format] : FORMATS['STANDARD'])};
  ${({ letterCase }) => (letterCase ? LETTER_CASES[letterCase] : LETTER_CASES['NONE'])};
  ${({ fontStyle }) => (fontStyle ? FONT_STYLES[fontStyle] : FONT_STYLES['NONE'])};
  ${({ align }) => (align ? ALIGNS[align] : ALIGNS['LEFT'])};
  color: ${({ theme, color }) =>
    color && theme.COLORS[color] ? theme.COLORS[color] : theme.COLORS['DARK']};
`;
