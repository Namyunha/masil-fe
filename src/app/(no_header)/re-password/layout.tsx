import React from 'react';
import BackBtnHead from '../_component/BackBtnHead';

export default function RePasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="h-dvh w-full box-border flex flex-col px-5">
        <BackBtnHead />
        {children}
      </div>
    </>
  );
}
