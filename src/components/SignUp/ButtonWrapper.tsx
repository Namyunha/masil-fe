'use client';

import useResponsive from '@/hooks/useResponsive';
import Button from '../Button';

export default function ButtonWrapper() {
  const isMobile = useResponsive();

  return (
    <>
      <Button
        value="회원가입"
        onClick={() => {
          console.log('회원가입');
        }}
      />
      {isMobile && (
        <Button
          value="취소"
          onClick={() => {
            console.log('취소');
          }}
        />
      )}
    </>
  );
}
