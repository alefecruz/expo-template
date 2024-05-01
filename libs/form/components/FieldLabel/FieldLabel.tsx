import React from 'react';

import { Text, ITextProps } from '@/components/atoms/Text';
import { useFormContext } from '@/libs/form/adapter';

export interface IFieldLabelProps extends ITextProps {
  renderMessage?: (arg0: any) => string;
}

export const FieldLabel = ({ renderMessage, text, ...rest }: IFieldLabelProps) => {
  const { watch } = useFormContext();

  return <Text {...rest}>{renderMessage ? renderMessage(watch) : text}</Text>;
};
