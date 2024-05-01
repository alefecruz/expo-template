import { ColorValue } from 'react-native';

import { IButtonProps } from './Button';

import { styled, theme, IDefaultTheme } from '@/libs/style';

export type IButtonVariants = {
  color: keyof IDefaultTheme['COLORS'];
};

export const ButtonComponent = styled.TouchableOpacity<Omit<IButtonProps, 'label'>>`
  width: 100%;
  margin: 10px 0;
  padding: 10px 12px;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({ theme, color }) => (color && theme.COLORS[color] ? theme.COLORS[color] : theme.COLORS['ACCENTED'])};};
  background-color: ${({ theme, color }) => (color && theme.COLORS[color] ? theme.COLORS[color] : theme.COLORS['ACCENTED'])};
`;

export const LoadingComponent = styled.ActivityIndicator.attrs({
  size: 'small',
  color: theme.COLORS.LIGHT as ColorValue,
})``;

export const ContentLabel = styled.View``;
