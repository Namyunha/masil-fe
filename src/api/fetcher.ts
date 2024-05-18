import { API_BASE_URL } from '@/constants/api';

type FetcherType = {
  endPoint: string;
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit;
};

export async function fetcher({
  endPoint,
  method,
  headers,
  body,
}: FetcherType) {
  // Todo: 백엔드와 API 문서 작업 이후 default 옵션 추가할 것
  if (!(body instanceof FormData)) {
    headers = {
      'Content-Type': 'application/json',
      ...headers,
    };
  }

  const options = {
    method,
    headers,
    body,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endPoint}`, options);

    if (!response.ok) {
      return Promise.reject(response);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
