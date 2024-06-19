'use client';

import React from 'react';
import { useModalStore } from '@/store/userStore';

export default function LoginLayout({
  children,
  agreement,
}: {
  children: React.ReactNode;
  agreement: React.ReactNode;
}) {
  const modalState = useModalStore();
  return (
    <>
      <section className="flex justify-center">
        <div>
          {children}
          {modalState.modalStatus && agreement}
        </div>
      </section>
    </>
  );
}
