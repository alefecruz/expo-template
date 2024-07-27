import styled from 'styled-components/native';

import { IFieldSelectItemProps } from './FieldSelectItem';

export const Container = styled.View<Pick<IFieldSelectItemProps, 'hasError' | 'isDisabled'>>`
  flex-direction: row;
`;
