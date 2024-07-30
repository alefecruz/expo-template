import * as React from 'react';
import { Text as TextComponent } from 'react-native';

import * as S from './styles';

import { classCompose } from '@/libs/style';

export type ITextProps = {
  format?: S.ITextVariants['format'];
  letterCase?: S.ITextVariants['letterCase'];
  align?: S.ITextVariants['align'];
  fontStyle?: S.ITextVariants['fontStyle'];
  color?: string;
  text?: string;
  children?: React.ReactElement | string;
};

export const Text = (props: ITextProps) => {
  const { format, letterCase, align, color, fontStyle, text = '', children } = props;
  if (!children && !text) return null;
  return (
    <TextComponent
      className={classCompose(S.textVariant({ format, letterCase, align, fontStyle }))}>
      {text || children}
    </TextComponent>
  );
};
