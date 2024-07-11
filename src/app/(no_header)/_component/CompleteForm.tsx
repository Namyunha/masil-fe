import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { userRegisterStore, validateCondition } from '@/store/userStore';

export default function CompleteForm() {
  const userInfo = userRegisterStore();
  const validate = validateCondition();
  const homeHandlerButton = () => {
    userInfo.resetProfile();
    validate.setValidateNum('');
    validate.setConfirmState(false);
    router.push('/');
  };
  const router = useRouter();
  useEffect(() => {
    return () => {
      router.refresh();
    };
  }, []);
  return (
    <div className="flex flex-col h-dvh justify-center">
      <div className="max:text-18 text-24 text-center">
        <p className="font-bold">마실에 가입한 것을 축하드립니다</p>
      </div>
      <div className="flex justify-center items-center h-60 m-11">
        <Icon name="register_logo" size={185} />
      </div>
      <Button size="m" onClick={homeHandlerButton} text="카페 구경하기" />
    </div>
  );
}
