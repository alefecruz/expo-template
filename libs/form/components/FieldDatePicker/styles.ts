import styled from 'styled-components/native';

import { IFieldDatePicker } from './FieldDatePicker';

export const Container = styled.View<Pick<IFieldDatePicker, 'hasError' | 'isDisabled'>>`
  flex-direction: row;
`;
