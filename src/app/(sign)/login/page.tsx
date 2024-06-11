import React from 'react';
import LoginForm from './_component/LoginForm';

export default async function page() {
  return (
    <>
      <div className="w-72 font-sans text-24 text-center">로그인</div>
      <LoginForm />
    </>
  );
}
