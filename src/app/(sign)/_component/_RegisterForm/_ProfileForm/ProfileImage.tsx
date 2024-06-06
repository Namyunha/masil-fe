'use client';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useRegisterStore } from '@/store/userStore';

export default function ProfileImage() {
  const imageRef = useRef(null);
  const [src, setSrc] = useState<string>();
  const [filename, setFileName] = useState<string>();
  const currentUserInfo = useRegisterStore();

  const onImageUploadHandler = () => {
    imageRef?.current?.click();
  };

  useEffect(() => {
    filename && currentUserInfo.setFileName(filename);
  }, [filename]);

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 h-full w-full">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
            <svg
              onClick={onImageUploadHandler}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="cursor-pointer size-6 w-3/5 h-3/5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </>
        )}
        <input
          onChange={async (e: ChangeEvent<HTMLInputElement>) => {
            // 미리보기
            if (e.target.files && e.target.files.length > 0) {
              const file = e.target.files[0];
              const imagePreview = window.URL.createObjectURL(file);
              currentUserInfo.setImageFile(file);
              setSrc(imagePreview);
              setFileName(encodeURIComponent(file.name));
            }
          }}
          ref={imageRef}
          className="hidden"
          type="file"
          accept="image/*"
        />
      </div>
    </>
  );
}
