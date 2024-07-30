import { VariantProps, createVariant } from '@/libs/style';

export const FORMATS = {
  H1: ['font-extrabold', 'text-4xl'],
  H2: ['font-extrabold', 'text-3xl'],
  H3: ['font-extrabold', 'text-2xl'],
  H4: ['font-extrabold', 'text-xl'],
  H5: ['font-extrabold', 'text-lg'],
  H6: ['font-extrabold', 'text-base'],
  PARAGRAPH: ['font-medium', 'text-base'],
  LEGEND: ['font-light', 'text-xs'],
  STANDARD: ['font-regular', 'text-sm'],
};

export const LETTER_CASES = {
  UPPER: ['uppercase'],
  LOWER: ['lowercase'],
  CAPITALIZE: ['capitalize'],
  NONE: [''],
};

export const ALIGNS = {
  LEFT: ['text-left'],
  CENTER: ['text-center'],
  RIGHT: ['text-right'],
  JUSTIFY: ['text-justify'],
  START: ['text-start'],
  END: ['text-end'],
};

export const FONT_STYLES = {
  ITALIC: ['italic'],
  NONE: ['not-italic'],
};

export type ITextVariants = VariantProps<typeof textVariant>;

export const textVariant = createVariant('montserrat', {
  variants: {
    format: FORMATS,
    align: ALIGNS,
    letterCase: LETTER_CASES,
    fontStyle: FONT_STYLES,
  },
  defaultVariants: {
    format: 'STANDARD',
    align: 'LEFT',
    letterCase: 'NONE',
    fontStyle: 'NONE',
  },
});
