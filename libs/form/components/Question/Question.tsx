import React, { useEffect } from 'react';

import * as S from './styles';
import { IForm } from '../Form';

import { Text } from '@/components/atoms/Text';
import { IQuestion, IFields, IFieldRegistred } from '@/libs/form';
import { useFormContext } from '@/libs/form/adapter';
import { FieldLabel } from '@/libs/form/components/FieldLabel';
import { FieldTextInput } from '@/libs/form/components/FieldTextInput';

export const Question = ({
  fields,
  dependsOn,
  label,
  orientation = 'row',
  mode,
}: IQuestion & Pick<IForm, 'mode'>) => {
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
    <S.Container hasError={validationField(fieldsNames)}>
      {Array.from({ length: UNIQUE_QUESTION }, (_, i) => i + 1).map((questionIndex) => (
        <S.Wrapper key={questionIndex}>
          {label && <Text text={`${label} ${isRequired && mode !== 'PRESENTATION' ? '*' : ''}`} />}
          <S.ContentQuestion orientation={orientation}>
            {fields.map((field, index) => {
              const [fieldKey] = Object.keys(field);
              const props = field[fieldKey as keyof typeof field];

              return props && fieldMapper[fieldKey as keyof typeof field](props, index);
            })}
          </S.ContentQuestion>
          {validationField(fieldsNames) === true && (
            <S.ContentError>
              {fieldsNames
                .map((name) => name && errors[name]?.message)
                .filter((message, index, self) => !self.includes(message, index + 1))
                .map((message, index) => {
                  return (
                    message && (
                      <Text
                        key={index}
                        text={`- ${message.toString()}`}
                        color="DANGER"
                        format="STANDARD"
                      />
                    )
                  );
                })}
            </S.ContentError>
          )}
        </S.Wrapper>
      ))}
    </S.Container>
  ) : null;
};
