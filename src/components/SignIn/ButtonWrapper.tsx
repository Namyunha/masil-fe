'use client';

import Button from '../Button';

export default function ButtonWrapper() {
  return (
    <>
      <Button
        value="로그인"
        onClick={() => {
          console.log('로그인');
        }}></Button>
    </>
  );
}
