import React from 'react';
import { findUserList } from '@/utils/database';
import LoginForm from './_component/LoginForm';

export default async function page() {
  findUserList().catch(console.dir);
  return (
    <>
      <div className="w-72 font-sans text-24 text-center">로그인</div>
      <LoginForm />
    </>
  );
}
