export type NoOptionals<T> = {
  [K in keyof T]-?: T[K];
};
