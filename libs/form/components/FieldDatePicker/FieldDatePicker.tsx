import React, { useEffect } from 'react';

import * as Style from './styles';

import { DatePicker, IDatePickerProps } from '@/components/atoms/DatePicker';
import { Text } from '@/components/atoms/Text';
import { isValid as isValidDate, format, convertDateWithoutTimezone } from '@/libs/date';
import { IValidationFunction, IFormValidation } from '@/libs/form';
import { Controller, useFormContext } from '@/libs/form/adapter';

export interface IFieldDatePicker extends IDatePickerProps {
  name: string;
  label?: string;
  validation?: IFormValidation;
  validateDependsOn?: (fn?: (fieldName?: string | string[]) => any) => IValidationFunction;
  placeholder?: string;
  minimumDate?: Date;
  maximumDate?: Date;
  defaultValue?: Date | null;
  hasError?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
}

export const FieldDatePicker = ({
  name,
  validation,
  validateDependsOn,
  placeholder = 'DD/MM/AAAA',
  defaultValue,
  isDisabled = false,
  isReadOnly = false,
  hasError,
  isValid,
  ...rest
}: IFieldDatePicker) => {
  const { control, getValues, setValue } = useFormContext();

  useEffect(() => {
    if (name) setValue(name, defaultValue && convertDateWithoutTimezone(defaultValue));
  }, [setValue, defaultValue, name]);

  if (isReadOnly)
    return (
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue && convertDateWithoutTimezone(defaultValue)}
        render={() => (
          <Style.Container>
            <Text>
              {defaultValue
                ? isValidDate(defaultValue)
                  ? format(defaultValue, 'dd/MM/yyyy')
                  : 'Data Inválida'
                : placeholder}
            </Text>
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
      defaultValue={defaultValue && convertDateWithoutTimezone(defaultValue)}
      render={({ field: { onChange, value } }) => (
        <Style.Container>
          <DatePicker
            {...rest}
            onChange={onChange}
            value={value ? value : null}
            hasError={hasError}
            isValid={validation && value && !hasError}
          />
        </Style.Container>
      )}
    />
  );
};
