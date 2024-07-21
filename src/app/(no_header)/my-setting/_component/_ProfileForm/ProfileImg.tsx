'use client';
import React, { useRef } from 'react';
import { UseFormRegister, UseFormWatch } from 'react-hook-form';
import { formInputs } from '@/types/user/form';

export default function ProfileImg({
  register,
  watch,
}: {
  register: UseFormRegister<formInputs>;
  watch: UseFormWatch<formInputs>;
}) {
  let previewImg = '';
  const imgRef = useRef<HTMLInputElement | null>(null);
  const { ref: registerRef, ...rest } = register('img');
  const imgFile = watch('img')?.[0];
  if (imgFile) {
    const binaryData = [imgFile];
    const urlImage = URL.createObjectURL(
      new Blob(binaryData, { type: 'image' })
    );
    previewImg = urlImage;
  }
  return (
    <div>
      <img
        className="w-28 h-28 rounded-full"
        onClick={() => imgRef.current?.click()}
        src={imgFile ? previewImg : '/image/profile_image.png'}
        alt="프로필 이미지 선택"
      />
      <input
        {...rest}
        ref={(e) => {
          registerRef(e);
          imgRef.current = e;
        }}
        className="hidden"
        type="file"
      />
    </div>
  );
}
