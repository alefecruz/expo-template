import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import {
  IReactHookFormValidation,
  IValidationFunction,
} from '@/lib/react-hook-form-validation/validation';

import * as Style from './styles';

export interface IFieldTextInput {
  name: string;
  mask?: string;
  validation?: IReactHookFormValidation['validate'];
  validateDependsOn?: (fn?: (fieldName?: string | string[]) => any) => IValidationFunction;
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  defaultValue?: string;
  placeholder?: string;
  type?: 'text' | 'decimal' | 'number' | 'password' | 'email' | 'search';
  width?: '100%' | '50%' | '25%' | '20%' | '15%';
  hasError?: boolean;
  isDisabled?: boolean;
  iconHide?: boolean;
  isReadOnly?: boolean;
  triggerValidation?: string | string[];
  resetAnotherField?: string;
}

const FieldTextInput = (props: IFieldTextInput) => {
  const {
    name,
    mask,
    validation,
    validateDependsOn,
    type = 'text',
    size = 'medium',
    width = '100%',
    defaultValue = null,
    isDisabled = false,
    isReadOnly = false,
    iconHide = true,
    hasError = null,
    triggerValidation,
    resetAnotherField,
  } = props;
  const { control, getValues, trigger, resetField } = useFormContext();
  const [secure, setSecure] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  if (isReadOnly)
    return (
      <Controller
        defaultValue={type === 'decimal' || type === 'number' ? Number(defaultValue) : defaultValue}
        name={name}
        control={control}
        render={() => <Style.ReadOnly label={defaultValue} />}
      />
    );

  return (
    <Style.Container
      {...props}
      hasError={hasError}
      iconHide={iconHide}
      isFocused={isFocused}
      size={size}
      width={width}>
      <Controller
        defaultValue={type === 'decimal' || type === 'number' ? Number(defaultValue) : defaultValue}
        name={name}
        control={control}
        rules={{
          validate: {
            ...(validation ? validation : {}),
            ...(validateDependsOn && {
              validateDependsOn: validateDependsOn(getValues),
            }),
          },
        }}
        render={({ field: { value, onChange } }) =>
          mask ? (
            <Style.InputWithMaskComponent
              {...props}
              mask={mask}
              onChangeText={async value => {
                onChange(value);
                resetAnotherField && resetField(resetAnotherField);
                triggerValidation && trigger(triggerValidation);
              }}
              secureTextEntry={type === 'password' && !secure}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                setIsFocused(false);
              }}
              value={value}
              size={size}
              editable={!isDisabled}
            />
          ) : (
            <Style.TextInputComponent
              {...props}
              onChangeText={async value => {
                onChange(type === 'decimal' || type === 'number' ? Number(value) : value);
                resetAnotherField && resetField(resetAnotherField);
                triggerValidation && trigger(triggerValidation);
              }}
              secureTextEntry={type === 'password' && !secure}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                setIsFocused(false);
              }}
              value={value}
              size={size}
              editable={!isDisabled}
            />
          )
        }
      />

      {!iconHide && (
        <Style.ContentIcon
          iconSettings={{
            secure,
            type,
          }}
          onPress={() => setSecure(!secure)}>
          <Style.SalvusIcon
            iconSettings={{
              secure,
              type,
            }}
            isDisabled={isDisabled}
          />
        </Style.ContentIcon>
      )}
    </Style.Container>
  );
};

export default FieldTextInput;
