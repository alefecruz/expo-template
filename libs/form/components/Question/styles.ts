import styled, { css } from 'styled-components/native';

import { IQuestion } from '../../create-question';

export const Container = styled.View<{
  hasError: boolean | null;
  width: IQuestion['width'];
}>`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;

  border-bottom-color: ${({ theme }) => theme.COLORS.PRIMARY_DARK};
  border-left-color: ${({ theme }) => theme.COLORS.LIGHT};
  ${({ hasError, theme }) => {
    if (hasError === false)
      return css`
        border-left-color: ${theme.COLORS.ACCENTED_DARK};
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

export const ContentQuestion = styled.View<{ orientation: 'row' | 'column'; isCenter: boolean }>`
  flex-direction: ${({ orientation }: { orientation: 'row' | 'column' }) => orientation};
  align-items: ${({ orientation }: { orientation: 'row' | 'column' }) =>
    orientation === 'column' ? 'flex-start' : 'center'};
  ${({ isCenter }) =>
    isCenter &&
    css`
      justify-content: center;
    `}
  margin-top: 5px;
`;

export const ContentLabel = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.SPACINGS.SM}px;
  height: ${({ theme }) => theme.SPACINGS.M}px;
`;

export const ContentError = styled.View`
  margin: 4px;
  max-width: 70%;
  flex-direction: row;
`;
