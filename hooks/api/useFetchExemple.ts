import { useState, useCallback } from 'react';

import { Error } from '@/libs/http';

type Exemple = {
  elem: string;
};

type Request = {
  elem: string;
};

type Response = {
  data: Exemple | null;
  error: Error | null;
  isLoading: boolean;
};

export type ExempleDTO = {
  element: string;
};

export const useExemple = () => {
  const [response, setResponse] = useState<Response>({
    data: null,
    error: null,
    isLoading: false,
  });

  const executeLogin = useCallback(async ({ elem }: Request) => {
    setResponse((prevState) => ({ ...prevState, isLoading: true }));

    const { data, error } = { data: { elem: 'Hello' }, error: null }; // call yout service

    if (error) {
      setResponse((prevState) => ({
        ...prevState,
        error,
        isLoading: false,
        data: null,
      }));
      return;
    }

    setResponse((prevState) => ({
      ...prevState,
      data,
      isLoading: false,
      error: null,
    }));
  }, []);

  return { ...response, executeLogin };
};
