import React from 'react';
import { connectDB } from '@/utils/database';
import LoginForm from './_component/LoginForm';

export default async function page() {
  const client = await connectDB;
  const db = client.db('masil');
  const result = await db.collection('user').find().toArray();
  console.log('result = ', result);
  return (
    <>
      <div className="w-72 font-sans text-24 text-center">로그인</div>
      <LoginForm />
    </>
  );
}
