import { MaskedTextInput } from 'react-native-mask-text';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

import { IFieldTextInput } from '.';

import Text from '@/components/atoms/field-label';
import theme from '@/global/styles/theme';
import Icon from '@/lib/salvus-icons-lib';

interface StatusInterface {
  isFocused: boolean;
  hasError: boolean;
}

interface IconInterface {
  isDisabled?: boolean;
  iconSettings: IconSettingsInterface;
}

interface IconSettingsInterface {
  type: 'text' | 'decimal' | 'number' | 'password' | 'email' | 'search';
  secure: boolean;
  isValid?: boolean;
  hasError?: boolean;
}

export const ReadOnly = styled(Text)``;

export const Container = styled.View<IFieldTextInput & StatusInterface>`
  ${({ size }) => setSize[size].box};
  border-width: ${RFValue(1)}px;
  width: ${({ width }) => width};
  margin: 0 4px;
  border-color: ${({ theme, hasError, isFocused, isDisabled }) => {
    if (hasError === true) return theme.colors.DANGER;
    if (isFocused) return theme.colors.PRIMARY_1;
    if (isDisabled) return theme.colors.DISABLED;
    return theme.colors.SECONDARY_2;
  }};
  background-color: ${({ theme, isDisabled }) => {
    if (isDisabled) return theme.colors.DISABLED;
    return theme.colors.LIGHT;
  }};
  flex-direction: row;
`;

export const TextInputComponent = styled.TextInput.attrs(({ type }: IFieldTextInput) => ({
  keyboardType: setKeyboardType[type],
  autoCompleteType: setAutoCompleteType[type],
  selectionColor: theme.colors.SECONDARY_2,
}))<IFieldTextInput>`
  width: 100%;
  ${({ size }) => setSize[size].font};
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.PRIMARY_2};
  padding-right: ${({ iconHide }) => (!iconHide ? 0 : RFValue(20))}px;
`;

export const InputWithMaskComponent = styled(MaskedTextInput).attrs(
  ({ type }: IFieldTextInput) => ({
    keyboardType: setKeyboardType[type],
    autoCompleteType: setAutoCompleteType[type],
    selectionColor: theme.colors.SECONDARY_2,
  }),
)<IFieldTextInput & StatusInterface>`
  width: 100%;
  ${({ size }) => setSize[size].font};
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.PRIMARY_2};
  padding-right: ${({ iconHide }) => (iconHide ? 0 : RFValue(20))}px;
`;

export const ContentIcon = styled.TouchableOpacity<IconInterface>`
  right: 16px;
  align-self: center;
  ${({ iconSettings }) => setIcon(iconSettings).style};
`;

export const SalvusIcon = styled(Icon).attrs((props: IconInterface) => ({
  name: setIcon(props.iconSettings).name,
  size: RFValue(16),
  color: props.isDisabled ? 'PRIMARY_0' : setIcon(props.iconSettings).color,
}))<IconInterface>``;

const setSize = {
  small: {
    box: css`
      padding: 0px ${RFValue(10)}px;
      border-radius: ${RFValue(5)}px;
      height: 40px;
    `,
    font: css`
      font-size: ${RFValue(14)}px;
    `,
  },
  medium: {
    box: css`
      padding: 0px ${RFValue(12)}px;
      border-radius: ${RFValue(8)}px;
      height: 45px;
    `,
    font: css`
      font-size: ${RFValue(14)}px;
    `,
  },
  large: {
    box: css`
      padding: 0px ${RFValue(16)}px;
      height: 60px;
      border-radius: ${RFValue(8)}px;
    `,
    font: css`
      font-size: ${RFValue(15)}px;
    `,
  },
  'extra-large': {
    box: css`
      padding: 0px ${RFValue(20)}px;
      border-radius: ${RFValue(10)}px;
      height: 70px;
    `,
    font: css`
      font-size: ${RFValue(16)}px;
    `,
  },
};

const setKeyboardType = {
  password: 'default',
  email: 'email-address',
  text: 'default',
  number: 'number-pad',
  decimal: 'decimal-pad',
  search: 'default',
};

const setAutoCompleteType = {
  email: 'email',
  password: 'password',
  text: 'off',
  number: 'off',
  decimal: 'off',
  search: 'off',
};

const setIcon = ({ type, secure, hasError }: IconSettingsInterface) => {
  if (hasError === false)
    return {
      color: 'PRIMARY_1',
      name: type === 'password' ? (secure ? 'eye' : 'eye-slash') : 'alert',
    } as const;
  if (hasError === true)
    return {
      color: 'DANGER',
      name: type === 'password' ? (secure ? 'eye' : 'eye-slash') : 'check',
    } as const;
  switch (type) {
    case 'password':
      return {
        color: 'PRIMARY_1',
        name: secure ? 'eye' : 'eye-slash',
      } as const;
    case 'email':
      return { name: 'account' } as const;
    case 'search':
      return {
        color: 'PRIMARY_1',
        name: 'search',
        style: css`
          right: 28;
          justify-content: center;
          padding: 12px;
          height: 100%;
          border-left-width: ${RFValue(1)}px;
          border-left-color: ${({ theme }) => theme.colors.SECONDARY_1};
        `,
      } as const;
    default:
      return { name: 'dontRenderIcon' } as const;
  }
};
