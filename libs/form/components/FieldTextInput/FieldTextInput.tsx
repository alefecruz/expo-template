import _ from 'lodash';
import React, { useEffect } from 'react';

import * as S from './styles';

import { Text } from '@/components/atoms/Text';
import { TextInput, ITextInputProps } from '@/components/atoms/TextInput';
import { IValidationFunction, IFormValidation } from '@/libs/form';
import { Controller, useFormContext } from '@/libs/form/adapter';

export interface IFieldTextInputProps extends ITextInputProps {
  name: string;
  validation?: IFormValidation;
  validateDependsOn?: (fn?: (fieldName?: string | string[]) => any) => IValidationFunction;
  defaultValue?: string;
  placeholder?: string;
  isReadOnly?: boolean;
  widthPercentage?: '100%' | '50%' | '25%' | '12.5%';
}

export const FieldTextInput = ({
  name,
  validation,
  validateDependsOn,
  type = 'text',
  defaultValue,
  isDisabled = false,
  isReadOnly = false,
  hasError,
  isValid,
  ...rest
}: IFieldTextInputProps) => {
  const { control, getValues } = useFormContext();

  if (isReadOnly)
    return (
      <Controller
        defaultValue={type === 'decimal' || type === 'number' ? Number(defaultValue) : defaultValue}
        name={name}
        control={control}
        render={() => <Text>{defaultValue}</Text>}
      />
    );

  return (
    <S.Container isDisabled={isDisabled}>
      <Controller
        defaultValue={type === 'decimal' || type === 'number' ? Number(defaultValue) : defaultValue}
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
        render={({ field: { value, onChange } }) => {
          return (
            <TextInput
              {...rest}
              onChange={onChange}
              value={!_.isNil(value) ? value : ''}
              hasError={hasError}
              isValid={validation && value && !hasError}
              type={type}
            />
          );
        }}
      />
    </S.Container>
  );
};
