import React from 'react';

import * as S from './Text.styles';

import { capitalize } from '@/utils/text-helper';

export type ITextProps = {
  format?: S.IVariantTextProps['format'];
  fontStyle?: S.IVariantTextProps['fontStyle'];
  letterCase?: S.IVariantTextProps['letterCase'];
  color?: S.IVariantTextProps['color'];
  align?: S.IVariantTextProps['align'];
  text?: string;
  children?: React.ReactElement | string;
};

export const Text = (props: ITextProps) => {
  const { children, letterCase, text } = props;

  return (
    <S.TextComponent {...props}>
      {letterCase === 'CAPTALIZE' && text ? capitalize(text) : text || children}
    </S.TextComponent>
  );
};
