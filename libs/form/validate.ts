import { isEmpty } from 'lodash';

import * as validationHelper from '@/utils/validation-helper';

type IOptions = {
  message: string;
};

export type IFormValidation = Validation;
export type IValidationFunction = (value: any) => boolean | string;

class Validation {
  public get: Record<string, IValidationFunction> = {};
  constructor() {
    this.get = {};
  }

  _addValidate(functionName: string, validateFn: IValidationFunction) {
    this.get[functionName] = validateFn;
  }

  required(options?: IOptions) {
    this._addValidate(
      this.required.name,
      (value) =>
        validationHelper.isRequired(value) || (options && options.message) || 'Campo obrigatório.',
    );
    return this;
  }

  positive(options?: IOptions) {
    this._addValidate(
      this.positive.name,
      (value) =>
        validationHelper.isPositive(value) ||
        isEmpty(value) ||
        (options && options.message) ||
        'O valor deve ser um número positivo.',
    );
    return this;
  }

  falsable(options?: IOptions) {
    this._addValidate(
      this.falsable.name,
      (value) =>
        validationHelper.isFalse(value) ||
        isEmpty(value) ||
        (options && options.message) ||
        'O valor deve ser falso.',
    );
    return this;
  }

  integer(options?: IOptions) {
    this._addValidate(
      this.integer.name,
      (value) =>
        validationHelper.isInteger(value) ||
        isEmpty(value) ||
        (options && options.message) ||
        'O valor deve ser um número inteiro.',
    );
    return this;
  }

  isEmail(options?: IOptions) {
    this._addValidate(
      this.isEmail.name,
      (value) =>
        validationHelper.isValidEmail(value) ||
        isEmpty(value) ||
        (options && options.message) ||
        'O email não é válido.',
    );
    return this;
  }

  isPassword(options?: IOptions) {
    this._addValidate(
      this.isPassword.name,
      (value) =>
        validationHelper.isValidPassword(value) ||
        isEmpty(value) ||
        (options && options.message) ||
        'A Senha deve conter pelo menos 8 caracteres, uma letra maiúscula e uma minúscula.',
    );
    return this;
  }

  lessOrIqualThan(otherValue: number, options?: IOptions) {
    this._addValidate(
      this.lessOrIqualThan.name,
      (value) =>
        validationHelper.isLessOrEqualThan(value, otherValue) ||
        isEmpty(value) ||
        (options && options.message) ||
        `O valor deve ser menor ou igual a ${otherValue}.`,
    );
    return this;
  }

  lessThan(otherValue: number, options?: IOptions) {
    this._addValidate(
      this.lessThan.name,
      (value) =>
        validationHelper.isLessThan(value, otherValue) ||
        isEmpty(value) ||
        (options && options.message) ||
        `O valor deve ser menor a ${otherValue}.`,
    );
    return this;
  }

  moreOrIqualThan(otherValue: number, options?: IOptions) {
    this._addValidate(
      this.moreOrIqualThan.name,
      (value) =>
        validationHelper.isMoreOrEqualThan(value, otherValue) ||
        isEmpty(value) ||
        (options && options.message) ||
        `O valor deve ser maior ou igual a ${otherValue}.`,
    );
    return this;
  }

  moreThan(otherValue: number, options?: IOptions) {
    this._addValidate(
      this.moreThan.name,
      (value) =>
        validationHelper.isMoreThan(value, otherValue) ||
        isEmpty(value) ||
        (options && options.message) ||
        `O valor deve ser maior a ${otherValue}.`,
    );
    return this;
  }

  truth(options?: IOptions) {
    this._addValidate(
      this.truth.name,
      (value) =>
        validationHelper.isTruth(value) ||
        isEmpty(value) ||
        (options && options.message) ||
        'O valor deve ser verdadeiro.',
    );
    return this;
  }
}

export const validate = () => new Validation();
