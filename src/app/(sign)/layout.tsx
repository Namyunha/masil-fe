'use client';

import React from 'react';
import { useModalStore } from '@/store/store';

export default function LoginLayout({
  children,
  agreement,
}: {
  children: React.ReactNode;
  agreement: React.ReactNode;
}) {
  const modalState = useModalStore();
  console.log('modalState = ', modalState.modalStatus);
  return (
    <>
      <section className="flex justify-center h-[35rem]">
        <div className="w-[20rem] flex flex-col items-center mt-48 gap-48">
          {children}
          {modalState.modalStatus && agreement}
        </div>
      </section>
    </>
  );
}
