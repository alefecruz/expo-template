import styled from 'styled-components/native';

export const Container = styled.View``;

export const ConteinerScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  background-color: ${({ theme }) => theme.COLORS.LIGHT};
`;

export const ConteinerView = styled.View`
  background-color: ${({ theme }) => theme.COLORS.LIGHT};
`;

export const ContentForm = styled.View``;
