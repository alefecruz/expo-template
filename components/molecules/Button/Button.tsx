import React from 'react';

import * as S from './styles';

import { TextComponent } from '@/components/atoms/Text';

export type IButton = {
  label: string;
  onPress: (arg0?: any) => void;
  color?: S.IButtonVariants['color'];
  isLoading?: boolean;
  isDisabled?: boolean;
};

export const Button = ({ label, isLoading, isDisabled, onPress, ...rest }: IButton) => {
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
            <TextComponent format="H5" align="CENTER" letterCase="UPPER_CASE" color="LIGHT">
              {label}
            </TextComponent>
          )}
        </S.ContentLabel>
      )}
    </S.ButtonComponent>
  );
};
