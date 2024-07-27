import * as React from 'react';

import * as S from './styles';

import { Text, ITextProps } from '@/components/atoms/Text';
import { useFormContext } from '@/libs/form/adapter';

export interface IFieldLabelProps extends ITextProps {
  renderMessage?: (arg0: any) => string;
}

export const FieldLabel = ({ renderMessage, text, ...rest }: IFieldLabelProps) => {
  const { watch } = useFormContext();

  return (
    <S.Container>
      <Text {...rest}>{renderMessage ? renderMessage(watch) : text}</Text>
    </S.Container>
  );
};
