'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useRegisterStore } from '@/store/userStore';

export default function CurrentMessage() {
  const currentUserState = useRegisterStore();
  const [userData, setUserData] = useState({
    ...currentUserState.userInfo,
    email: currentUserState.email,
    fileName: currentUserState.imageFile?.name,
    currentMessage: currentUserState.currentMessage,
  });
  useEffect(() => {
    setUserData({ ...userData, fileName: currentUserState.imageFile?.name });
  }, [currentUserState]);
  const router = useRouter();
  const file = currentUserState.imageFile;
  console.log('currnetMessage userData = ', userData);

  const onImageUploadHandler = async () => {
    const res = await (
      await fetch('/api/profile/image?file=' + currentUserState.fileName)
    ).json();
    //S3 업로드
    const formData = new FormData();
    Object.entries({
      ...(res.fields as Record<string, string | Blob>),
      file,
    }).forEach(([key, value]) => {
      formData.append(key, value as string | Blob);
    });
    const uploadResult = await fetch(res.url, {
      method: 'POST',
      body: formData,
    });
    console.log('uploadResult = ', uploadResult);
  };

  const onSaveInfo = async (e) => {
    setUserData({ ...userData, currentMessage: e.target.value });
  };

  const onUserUploadHandler = async () => {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(userData),
    });
    console.log('response = ', response);
  };

  const onSignUpHandler = async () => {
    await onUserUploadHandler();
    await onImageUploadHandler();
    // router.push('/');
  };

  return (
    <div className="flex flex-col h-96 mt-80 justify-end">
      <input
        onChange={(e) => onSaveInfo(e)}
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
