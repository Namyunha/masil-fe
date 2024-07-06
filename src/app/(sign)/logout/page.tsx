'use client';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Logout() {
  const accessToken = Cookies.get('accessToken');
  const router = useRouter();
  if (!accessToken) {
    router.push('/');
  }
  useEffect(() => {
    const logout = async () => {
      try {
        const response = await fetch('/api/auth/logout', {
          method: 'POST',
          cache: 'no-store',
        });
        if (!response.ok) {
          throw new Error('Failed to log out');
        }
        console.log('Logged out successfully');
        // 리다이렉션 또는 추가 처리
      } catch (error) {
        console.error('Logout error: ', error);
      }
    };
    console.log('accessToken = ', accessToken);
    Cookies.remove('accessToken');
    logout();
  }, [accessToken]);

  return <LoadingSpinner />;
}
