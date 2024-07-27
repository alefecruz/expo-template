import styled from 'styled-components/native';

import { IFieldTextInputProps } from './FieldTextInput';

export const Container = styled.View<Pick<IFieldTextInputProps, 'hasError' | 'isDisabled'>>`
  flex-direction: row;
`;
