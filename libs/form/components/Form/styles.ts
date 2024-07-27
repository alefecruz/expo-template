import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: ${({ theme }) => theme.SPACINGS.S}px;
`;

export const ContainerScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})``;

export const ContainerView = styled.View``;

export const ContentTitle = styled.View``;

export const ContentForm = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.SPACINGS.MD}px;
`;
