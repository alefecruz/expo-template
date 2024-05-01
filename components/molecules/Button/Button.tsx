import React from 'react';

import * as S from './styles';

import { Text } from '@/components/atoms/Text';

export type IButtonProps = {
  label: string;
  onPress: (arg0?: any) => void;
  color?: S.IButtonVariants['color'];
  isLoading?: boolean;
  isDisabled?: boolean;
};

export const Button = ({ label, isLoading, isDisabled, onPress, ...rest }: IButtonProps) => {
  const handleOnPress = () => {
    if (!isDisabled && !isLoading && onPress) onPress();
  };
  return (
    <S.ButtonComponent {...rest} onPress={handleOnPress} disabled={isDisabled}>
      {label && (
        <S.ContentLabel>
          {isLoading ? (
            <S.LoadingComponent />
          ) : (
            <Text format="H5" align="CENTER" letterCase="UPPER_CASE" color="LIGHT">
              {label}
            </Text>
          )}
        </S.ContentLabel>
      )}
    </S.ButtonComponent>
  );
};
