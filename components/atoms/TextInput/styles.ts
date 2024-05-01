import { ITextInputProps } from './TextInput';

import { styled, theme } from '@/libs/style';

const setKeyboardType = {
  password: 'default',
  email: 'email-address',
  text: 'default',
  number: 'number-pad',
  decimal: 'decimal-pad',
  search: 'default',
};

const setAutoCompleteType = {
  email: 'email',
  password: 'password',
  text: 'off',
  number: 'off',
  decimal: 'off',
  search: 'off',
};

export const TextInputComponent = styled.TextInput.attrs(({ type = 'text' }: ITextInputProps) => ({
  keyboardType: setKeyboardType[type],
  autoCompleteType: setAutoCompleteType[type],
  selectionColor: theme.COLORS.SECONDARY,
}))<ITextInputProps>`
  width: 100%;
  padding: 0px 12px;
  border-radius: 4px;
  height: 45px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.ACCENTED};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;
