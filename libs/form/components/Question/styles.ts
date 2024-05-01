import styled, { css } from 'styled-components/native';

import Text from '@/components/atoms/field-label';

export const Container = styled.View<{
  hasError: boolean | null;
}>`
  display: flex;
  flex-direction: column
 
  border-bottom-color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-left-color: ${({ theme }) => theme.COLORS.LIGHT};
  ${({ hasError, theme }) => {
    if (hasError === false)
      return css`
        border-left-color: ${theme.COLORS.ACCENTED};
      `;
    if (hasError === true)
      return css`
        border-left-color: ${theme.COLORS.DANGER};
      `;
  }};
`;

export const Wrapper = styled.View`
  justify-content: center;
`;

export const ContentQuestion = styled.View<{ orientation: 'row' | 'column' }>`
  flex-direction: ${({ orientation }: { orientation: 'row' | 'column' }) => orientation};
  align-items: ${({ orientation }: { orientation: 'row' | 'column' }) =>
    orientation === 'column' ? 'flex-start' : 'center'};
  margin-top: 5px;
`;

export const ContentError = styled.View`
  margin: 4px;x
`;
