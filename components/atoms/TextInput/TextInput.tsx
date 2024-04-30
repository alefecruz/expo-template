import React from 'react';

import * as S from './styles';

export type ITextInput = {
  mask?: string;
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  value?: string;
  placeholder?: string;
  type?: 'text' | 'decimal' | 'number' | 'password' | 'email' | 'search';
  hasError?: boolean;
  isDisabled?: boolean;
  secureTextEntry?: boolean;
  onChange?: (value: number | string) => void;
};

export const TextInput = (props: ITextInput) => {
  const { type = 'text', isDisabled, onChange } = props;

  return (
    <S.TextInputComponent
      {...props}
      onChangeText={async (value: string) => {
        onChange && onChange(type === 'decimal' || type === 'number' ? Number(value) : value);
      }}
      editable={!isDisabled}
    />
  );
};
