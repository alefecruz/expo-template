import _ from 'lodash';
import * as React from 'react';

import * as S from './styles';

import { SelectItem, ISelectItemProps } from '@/components/atoms/SelectItem';
import { Text } from '@/components/atoms/Text';
import { IValidationFunction, IFormValidation } from '@/libs/form';
import { Controller, useFormContext } from '@/libs/form/adapter';

export interface IFieldSelectItemProps extends ISelectItemProps {
  name: string;
  validation?: IFormValidation;
  validateDependsOn?: (fn?: (fieldName?: string | string[]) => any) => IValidationFunction;
  defaultValue?: string;
  placeholder?: string;
  isReadOnly?: boolean;
  widthPercentage?: '100%' | '50%' | '25%' | '12.5%';
}

export const FieldSelectItem = ({
  name,
  validation,
  validateDependsOn,
  defaultValue,
  options = [],
  isDisabled = false,
  isReadOnly = false,
  hasError,
  isValid,
  ...rest
}: IFieldSelectItemProps) => {
  const { control, getValues } = useFormContext();
  if (isReadOnly)
    return (
      <Controller
        defaultValue={defaultValue}
        name={name}
        control={control}
        render={() => <Text>{options.find(({ value }) => value === defaultValue)?.label}</Text>}
      />
    );

  return (
    <S.Container isDisabled={isDisabled}>
      <Controller
        defaultValue={defaultValue}
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
            <SelectItem
              {...rest}
              isDisabled={isDisabled}
              options={options}
              onChange={onChange}
              value={!_.isNil(value) ? value : null}
              hasError={hasError}
              isValid={validation && value && !hasError}
            />
          );
        }}
      />
    </S.Container>
  );
};
