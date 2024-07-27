import * as React from 'react';

import * as S from './styles';

import { Text } from '@/components/atoms/Text';
import { Button, IButtonProps } from '@/components/molecules/Button';
import { IQuestion, IFieldRegistred } from '@/libs/form';
import { useForm, FormProvider, UseFormReturn } from '@/libs/form/adapter';
import { Question } from '@/libs/form/components/Question';

export type IForm = {
  title?: string;
  type?: 'LIGHT' | 'DARK';
  mode?: 'PRESENTATION' | 'INTERACTIVE';
  form: IQuestion[];
  SubmitButtonProps: IButtonProps;
  hasScroll?: boolean;
  customMethods?: UseFormReturn;
  isDisabledValidation?: boolean;
  isHideMessageError?: boolean;
};

export const Form = ({
  form = [],
  title,
  type,
  SubmitButtonProps,
  hasScroll = false,
  isHideMessageError = false,
  customMethods,
  mode,
}: IForm) => {
  const getDefaultValues = (formQuestions: IQuestion[]) => {
    return formQuestions
      ? formQuestions
          .map(({ fields }) => fields)
          .flat()
          .map((field) => {
            for (const key in field)
              if (field[key as keyof IFieldRegistred]) {
                const name = field[key as keyof IFieldRegistred]?.name;
                const defaultValue = field[key as keyof IFieldRegistred]?.defaultValue;
                return (
                  name && {
                    [name]: defaultValue,
                  }
                );
              }
          })
          .filter(Boolean)
      : [];
  };

  const defaultValues = getDefaultValues(form);

  const methodsCurrent = useForm({
    defaultValues: Object.assign({}, ...defaultValues),
    mode: 'onChange',
  });

  const methods = customMethods ? customMethods : methodsCurrent;

  function renderForm() {
    return (
      <S.Container>
        {title && (
          <S.ContentTitle>
            <Text format="H6" color={type === 'LIGHT' ? 'LIGHT' : 'PRIMARY_DARK'}>
              {title}
            </Text>
          </S.ContentTitle>
        )}
        <S.ContentForm>
          {form.map((field, index) => (
            <Question
              key={index}
              {...field}
              mode={mode}
              type={type}
              isHideMessageError={isHideMessageError}
            />
          ))}
        </S.ContentForm>
        <Button {...SubmitButtonProps} onPress={methods.handleSubmit(SubmitButtonProps?.onPress)} />
      </S.Container>
    );
  }

  return (
    <FormProvider {...methods}>
      {hasScroll ? (
        <S.ContainerScrollView>{renderForm()}</S.ContainerScrollView>
      ) : (
        <S.ContainerView>{renderForm()}</S.ContainerView>
      )}
    </FormProvider>
  );
};
