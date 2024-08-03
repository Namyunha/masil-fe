import { useRouter } from 'next/navigation';
import React from 'react';
import Button from '@/components/Button/Button';

type LogOutModalProps = {
  closeHandler: () => void;
};

export default function LogOutModal({ closeHandler }: LogOutModalProps) {
  const router = useRouter();
  const onLogoutHandler = async () => {
    const result = await (
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
    ).json();
    if (result.status === 200) {
      router.push('/');
    }
    console.log('result = ', result);
  };

  return (
    <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
      <div className="relative w-3/4 h-44 z-modal bg-white rounded-lg flex flex-col justify-center items-center">
        <span className="text-18 mb-7 font-bold">로그아웃 하시겠습니까?</span>
        <div className="flex justify-center gap-5">
          <Button
            onClick={() => closeHandler()}
            size="s"
            variant="secondary"
            text="취소"
          />
          <Button
            onClick={onLogoutHandler}
            size="s"
            variant="primary"
            text="로그아웃"
          />
        </div>
      </div>
    </div>
  );
}
