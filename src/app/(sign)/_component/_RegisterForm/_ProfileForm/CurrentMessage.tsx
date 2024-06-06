'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useRegisterStore } from '@/store/userStore';

export default function CurrentMessage() {
  const currentUserState = useRegisterStore();
  const [message, setMessage] = useState<string>();
  const router = useRouter();
  const file = currentUserState.imageFile;
  const onImageUploadHandler = async () => {
    const res = await (
      await fetch('/api/profile/image?file=' + currentUserState.fileName)
    ).json();
    //S3 업로드
    const formData = new FormData();
    Object.entries({ ...res.fields, file }).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const uploadResult = await fetch(res.url, {
      method: 'POST',
      body: formData,
    });
    console.log('uploadResult = ', uploadResult);
  };

  const onSignUpHandler = () => {
    currentUserState.setCurrentMessage(message);
    onImageUploadHandler();
    router.push('/');
  };

  return (
    <div className="flex flex-col h-96 mt-80 justify-end">
      <input
        onChange={(e) => setMessage(e.target.value)}
        className="text-center w-72 border-b-2 pt-3 pb-3 border-black/50"
        placeholder="상태 메시지를 입력하세요"
      />
      <div className="flex justify-center">
        <button
          onClick={onSignUpHandler}
          className="mt-28 w-72 font-semibold text-white rounded-lg p-16 bg-orange">
          회원가입
        </button>
      </div>
    </div>
  );
}
