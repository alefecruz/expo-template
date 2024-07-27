import axios from 'axios';

type Auth = {
  username: string;
  password: string;
};

type ResponseError = {
  message: string;
  code: string;
  response: {
    status: number;
  };
};

export type Error = {
  message: string;
  code: string;
  status: number;
};

type makeHttpRequestType = {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, any>;
  body?: Record<string, any>;
  auth?: Auth;
  token?: string;
};

export async function makeHttpRequest({
  url,
  method,
  headers,
  body,
  auth,
  token,
}: makeHttpRequestType) {
  try {
    const response = await axios.request({
      url,
      method,
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : undefined,
        'Content-Type': 'application/json',
        Connection: 'keep-alive',
      },
      data: body,
      auth,
    });
    return { data: response.data, status: response.status, error: null };
  } catch (e) {
    const error: Error = {
      code: (e as ResponseError)?.code,
      message: (e as ResponseError)?.message,
      status: (e as ResponseError)?.response?.status,
    };
    return { data: null, status: null, error };
  }
}
