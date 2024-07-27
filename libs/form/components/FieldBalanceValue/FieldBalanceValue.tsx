import React, { useEffect } from 'react';

import * as Style from './styles';

import { Text } from '@/components/atoms/Text';
import { BalanceValue, IBalanceValueProps } from '@/components/molecules/BalanceValue';
import { IValidationFunction, IFormValidation } from '@/libs/form';
import { Controller, useFormContext } from '@/libs/form/adapter';

export interface IFieldBalanceValue extends IBalanceValueProps {
  name: string;
  label?: string;
  validation?: IFormValidation;
  validateDependsOn?: (fn?: (fieldName?: string | string[]) => any) => IValidationFunction;
  defaultValue?: number | null;
  hasError?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
}

export const FieldBalanceValue = ({
  name,
  validation,
  validateDependsOn,
  defaultValue,
  isDisabled = false,
  isReadOnly = false,
  hasError,
  isValid,
  ...rest
}: IFieldBalanceValue) => {
  const { control, getValues } = useFormContext();

  if (isReadOnly)
    return (
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={() => (
          <Style.Container>
            <Text>{defaultValue?.toString()}</Text>
          </Style.Container>
        )}
      />
    );
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        validate: {
          ...(validation ? validation.get : {}),
          ...(validateDependsOn && {
            validateDependsOn: validateDependsOn(getValues),
          }),
        },
      }}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        <Style.Container>
          <BalanceValue
            {...rest}
            onChange={onChange}
            value={value ? value : 0}
            hasError={hasError}
            isValid={validation && value && !hasError}
          />
        </Style.Container>
      )}
    />
  );
};
