import { BASE_URL } from '@/constants/http';
import { makeHttpRequest } from '@/libs/http';

const PATH = 'user';

type SelfRequest = {
  token: string;
};

export type SelfResponse = {
  address: string;
  cellphone: string;
  cpf: string;
  email: string;
  id: number;
  last_login: string;
  name: string;
  role: string;
  telephone: string;
};

export const self = async ({ token }: SelfRequest) => {
  const { data, status, error } = await makeHttpRequest({
    method: 'POST',
    url: `${BASE_URL}/${PATH}/self`,
    token,
  });

  return { data, status, error };
};
