'use client';

import Button from '../Button';

export default function ButtonWrapper() {
  return (
    <>
      <Button
        value="회원가입"
        onClick={() => {
          console.log('회원가입');
        }}
      />
    </>
  );
}
