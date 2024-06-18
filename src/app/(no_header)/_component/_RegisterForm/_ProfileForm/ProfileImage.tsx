'use client';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import Icon from '@/components/Icon';
import { useRegisterStore } from '@/store/userStore';

export default function ProfileImage() {
  const imageRef = useRef<HTMLInputElement>(null);
  const [src, setSrc] = useState<string>();
  const [filename, setFileName] = useState<string>();
  const currentUserInfo = useRegisterStore();
  const onImageUploadHandler = () => {
    imageRef?.current?.click();
  };

  useEffect(() => {
    filename && currentUserInfo.setFileName(filename);
  }, [filename]);

  const onPreviewImageHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    // 미리보기
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imagePreview = window.URL.createObjectURL(file);
      currentUserInfo.setImageFile(file);
      setSrc(imagePreview);
      setFileName(encodeURIComponent(file.name));
    }
  };

  return (
    <>
      <div className="absolute flex flex-col justify-center items-center w-72 h-72">
        {src && src.length > 0 ? (
          <img
            onClick={onImageUploadHandler}
            src={src}
            className="cursor-pointer  w-3/5 h-3/5 rounded-full"
          />
        ) : (
          <>
            <span className="relative inline-block w-10 h-10 top-12 left-12 rounded-full bg-orange text-white">
              <Icon filter="WHITE" name="icon_plus" size={40} />
            </span>
            <span onClick={onImageUploadHandler}>
              <Icon
                size={180}
                className="cursor-pointer size-6 w-3/5 h-3/5"
                name="icon_profile"
              />
            </span>
          </>
        )}
        <input
          onChange={onPreviewImageHandler}
          ref={imageRef}
          className="hidden"
          type="file"
          accept="image/*"
        />
      </div>
    </>
  );
}
