import { cookies } from 'next/headers';
import { SERVER_API_BASE_URL } from '@/constants/api';

type ServerFetcherType = {
  endPoint: string;
  errorMessage: string;
};

// Memo: 서버 컴포넌트에 쓰이는 fetcher
export const serverFetcher = async <T>({
  endPoint,
  errorMessage,
}: ServerFetcherType): Promise<T> => {
  try {
    const accessToken = cookies().get('accessToken')?.value;

    const response = await fetch(SERVER_API_BASE_URL + endPoint, {
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
    });

    if (!response.ok) {
      throw new Error();
    }

    const data: T = await response.json();

    return data;
  } catch (error) {
    console.error('Fetch error:', error);

    throw new Error(errorMessage);
  }
};
