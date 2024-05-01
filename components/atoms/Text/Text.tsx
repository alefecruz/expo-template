import React from 'react';

import * as S from './styles';

import { capitalize } from '@/utils/text-helper';

export type ITextProps = {
  format?: S.ITextVariants['format'];
  fontStyle?: S.ITextVariants['fontStyle'];
  letterCase?: S.ITextVariants['letterCase'];
  color?: S.ITextVariants['color'];
  align?: S.ITextVariants['align'];
  text?: string;
  children?: string;
};

export const Text = ({ children, letterCase, text, ...rest }: ITextProps) => {
  return (
    <S.TextComponent {...rest}>
      {(letterCase === 'CAPTALIZE' && text) ||
      (letterCase === 'CAPTALIZE' && children && typeof children === 'string')
        ? capitalize(text || children)
        : text || children}
    </S.TextComponent>
  );
};
