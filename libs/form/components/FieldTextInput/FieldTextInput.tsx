import _ from 'lodash';
import React from 'react';

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
}

export const FieldTextInput = ({
  name,
  mask,
  validation,
  validateDependsOn,
  type = 'text',
  size = 'medium',
  defaultValue,
  isDisabled = false,
  isReadOnly = false,
  hasError,
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
    <S.Container hasError={hasError} isDisabled={isDisabled}>
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
          return <TextInput {...rest} onChange={onChange} value={!_.isNil(value) ? value : ''} />;
        }}
      />
    </S.Container>
  );
};
