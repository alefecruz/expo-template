import React from 'react';

import * as S from './styles';

import { Button, IButtonProps } from '@/components/molecules/Button';
import { IQuestion, IFieldRegistred } from '@/libs/form';
import { useForm, FormProvider, UseFormReturn } from '@/libs/form/adapter';
import { Question } from '@/libs/form/components/Question';

export type IForm = {
  mode?: 'PRESENTATION' | 'INTERACTIVE';
  form: IQuestion[];
  SubmitButtonProps: IButtonProps;
  hasScroll?: boolean;
  customMethods?: UseFormReturn;
};

export const Form = ({
  form = [],
  SubmitButtonProps,
  hasScroll = true,
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
        <S.ContentForm>
          {form.map((field, index) => (
            <Question key={index} {...field} mode={mode} />
          ))}
        </S.ContentForm>
        <Button {...SubmitButtonProps} onPress={methods.handleSubmit(SubmitButtonProps.onPress)} />
      </S.Container>
    );
  }

  return (
    <FormProvider {...methods}>
      {hasScroll ? (
        <S.ConteinerScrollView>{renderForm()}</S.ConteinerScrollView>
      ) : (
        <S.ConteinerView>{renderForm()}</S.ConteinerView>
      )}
    </FormProvider>
  );
};
