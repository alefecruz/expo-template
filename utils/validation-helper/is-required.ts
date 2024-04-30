import { isArray } from 'lodash';

export function isRequired(value: (string | number | boolean)[] | string | number | boolean) {
  return isArray(value) ? !!value.length : !!value;
}
