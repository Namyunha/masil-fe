import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import Icon from '@/components/Icon';
import { useRegisterStore, validateCondition } from '@/store/userStore';

export default function CompleteForm() {
  const userInfo = useRegisterStore();
  const validate = validateCondition();
  const homeHandlerButton = () => {
    userInfo.resetProfile();
    validate.setValidateNum('');
    validate.setValidateState();
    router.push('/');
  };
  const router = useRouter();
  useEffect(() => {
    return () => {
      router.refresh();
    };
  }, []);
  return (
    <div className="flex flex-col justify-between mt-20">
      <div className="text-18 text-center">
        <p className="font-bold">마실에 가입한 것을 축하드립니다</p>
      </div>
      <div className="flex justify-center items-center h-60 m-11">
        <Icon name="register_logo" size={150} />
      </div>
      <button
        onClick={homeHandlerButton}
        className="bg-primary text-white rounded-lg p-12 font-bold">
        카페 구경하기
      </button>
    </div>
  );
}
