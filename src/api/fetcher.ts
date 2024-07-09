import axios, { AxiosError } from 'axios';
import { API_BASE_URL } from '@/constants/api';
import { getCookie } from '@/utils/cookie';

export const fetcher = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

fetcher.interceptors.request.use(
  (config) => {
    // Memo: 토큰 저장 위치에 따라 로직 변경해야함
    const accessToken = getCookie('accessToken');

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    // Memo: 요청 자체가 실패했을 경우
    Promise.reject(error);
  }
);

fetcher.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      // Memo: 에러 응답이 있는 경우
      const { data } = error.response as {
        status: number;
        data: { status: number; message: string };
      };

      // Memo: 커스텀 에러 메세지가 없는 경우
      if (!data.message) {
        throw new Error(error.message);
      }

      throw new Error(data.message);
    } else if (error.request) {
      // Memo: 요청이 완료되었으나 응답이 없는 경우
      console.log(error.request);
    } else {
      // Memo: 요청을 보내기 전에 에러가 발생한 경우
      console.log('Error', error.message);
    }
    return Promise.reject(error);
  }
);
