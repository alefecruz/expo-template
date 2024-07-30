import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function classCompose(...classNames: ClassValue[]) {
  return twMerge(clsx(classNames));
}
