import styled from 'styled-components/native';

import { IFieldBalanceValue } from './FieldBalanceValue';

export const Container = styled.View<Pick<IFieldBalanceValue, 'hasError' | 'isDisabled'>>`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.SPACINGS.SM}px;
`;
