import styled from 'styled-components/native';

import { IFieldTextInputProps } from './FieldTextInput';

export const Container = styled.View<Pick<IFieldTextInputProps, 'hasError' | 'isDisabled'>>`
  border-width: 1px;
  border-color: ${({ theme, hasError, isDisabled }) => {
    if (hasError === true) return theme.COLORS.DANGER;
    if (isDisabled) return theme.COLORS.DISABLED;
    return theme.COLORS.SECONDARY;
  }};
  background-color: ${({ theme, isDisabled }) => {
    if (isDisabled) return theme.COLORS.DISABLED;
    return theme.COLORS.LIGHT;
  }};
  flex-direction: row;
`;
