import React from 'react';

import * as S from './styles';

export type ITextInputProps = {
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  value?: string;
  placeholder?: string;
  type?: 'text' | 'decimal' | 'number' | 'password' | 'email' | 'search';
  hasError?: boolean;
  isDisabled?: boolean;
  secureTextEntry?: boolean;
  onChange?: (value: number | string) => void;
};

export const TextInput = ({
  type = 'text',
  isDisabled,
  onChange,
  value,
  ...rest
}: ITextInputProps) => {
  return (
    <S.TextInputComponent
      {...rest}
      onChangeText={async (value: string) => {
        onChange && onChange(type === 'decimal' || type === 'number' ? Number(value) : value);
      }}
      value={value}
      editable={!isDisabled}
    />
  );
};
