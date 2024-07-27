import React, { useEffect } from 'react';

import * as S from './styles';
import { IForm } from '../Form';

import { Icon } from '@/components/atoms/Icon';
import { Text } from '@/components/atoms/Text';
import { IQuestion, IFields, IFieldRegistred } from '@/libs/form';
import { useFormContext } from '@/libs/form/adapter';
import { FieldBalanceValue } from '@/libs/form/components/FieldBalanceValue';
import { FieldDatePicker } from '@/libs/form/components/FieldDatePicker';
import { FieldLabel } from '@/libs/form/components/FieldLabel';
import { FieldLink } from '@/libs/form/components/FieldLink';
import { FieldSelectItem } from '@/libs/form/components/FieldSelectItem';
import { FieldTextInput } from '@/libs/form/components/FieldTextInput';

export const Question = ({
  fields,
  dependsOn,
  label,
  orientation = 'row',
  mode,
  width = '100%',
  isCenter = false,
  type,
  hideRequiredSymbol = false,
  isHideMessageError,
  isOmitLabelSpace = false,
}: IQuestion & Pick<IForm, 'mode' | 'type' | 'isHideMessageError'>) => {
  const {
    watch,
    unregister,
    getValues,
    formState: { errors },
  } = useFormContext();

  const UNIQUE_QUESTION = 1;
  const fieldMapper = {
    fieldTextInputProps: (props: any, index: number) => (
      <FieldTextInput
        key={index}
        hasError={!!errors[props.name]}
        {...props}
        isReadOnly={mode ? mode === 'PRESENTATION' : props.isReadOnly}
      />
    ),
    fieldLabelProps: (props: any, index: number) => <FieldLabel key={index} {...props} />,
    fieldLinkProps: (props: any, index: number) => <FieldLink key={index} {...props} />,
    fieldDatePickerProps: (props: any, index: number) => (
      <FieldDatePicker key={index} hasError={!!errors[props.name]} {...props} />
    ),
    fieldSelectItemProps: (props: any, index: number) => (
      <FieldSelectItem key={index} hasError={!!errors[props.name]} {...props} />
    ),
    fieldBalanceValueProps: (props: any, index: number) => (
      <FieldBalanceValue hasError={!!errors[props.name]} key={index} {...props} />
    ),
  };

  const isRequired =
    fields &&
    fields.some((field: IFields) => {
      const [fieldKey] = Object.keys(field);
      const validation = field[fieldKey as keyof IFieldRegistred]?.validation;
      return validation && validation.get && validation.get.required;
    });

  const getFieldsNames = (fields: IFields[]) => {
    return (
      fields &&
      fields
        .map((field) => {
          const [fieldKey] = Object.keys(field);
          const name = field[fieldKey as keyof IFieldRegistred]?.name;
          if (name) return name;
        })
        .filter(Boolean)
    );
  };

  const fieldsNames = getFieldsNames(fields);

  const showQuestion = dependsOn ? dependsOn(watch) : true;

  useEffect(() => {
    const unregisterField = () => {
      fields.forEach((field) => {
        const [fieldKey] = Object.keys(field);
        const name = field[fieldKey as keyof IFieldRegistred]?.name;
        name && unregister(field[fieldKey as keyof IFieldRegistred]?.name);
      });
    };
    if (dependsOn && showQuestion === false) unregisterField();
  }, [showQuestion]);

  const validationField = (fieldsNames: (string | undefined)[]): boolean | null => {
    if (!fieldsNames) return null;

    return fieldsNames.some(
      (name) => name && !errors[name] && (getValues(name) === null || getValues(name) === 0),
    )
      ? null
      : fieldsNames.some((name) => name && !!errors[name]);
  };

  return showQuestion ? (
    <S.Container hasError={validationField(fieldsNames)} width={width}>
      {Array.from({ length: UNIQUE_QUESTION }, (_, i) => i + 1).map((questionIndex) => (
        <S.Wrapper key={questionIndex}>
          {!isOmitLabelSpace && (
            <S.ContentLabel>
              {label && (
                <Text
                  format="PARAGRAPH"
                  color={type === 'LIGHT' ? 'LIGHT' : 'PRIMARY_DARK'}
                  text={`${label} ${!hideRequiredSymbol && isRequired && mode !== 'PRESENTATION' ? '*' : ''}`}
                />
              )}

              {!isHideMessageError && validationField(fieldsNames) === true && (
                <S.ContentError>
                  <Icon name="circleExclamation" color="DANGER" />
                  {fieldsNames
                    .map((name) => name && errors[name]?.message)
                    .filter((message, index, self) => !self.includes(message, index + 1))
                    .map((message, index) => {
                      return (
                        message && (
                          <Text
                            key={index}
                            text={`${message.toString()}`}
                            color="DANGER"
                            format="STANDARD"
                          />
                        )
                      );
                    })}
                </S.ContentError>
              )}
            </S.ContentLabel>
          )}
          <S.ContentQuestion orientation={orientation} isCenter={isCenter}>
            {fields.map((field, index) => {
              const [fieldKey] = Object.keys(field);
              const props = field[fieldKey as keyof typeof field];

              return props && fieldMapper[fieldKey as keyof typeof field](props, index);
            })}
          </S.ContentQuestion>
        </S.Wrapper>
      ))}
    </S.Container>
  ) : null;
};
