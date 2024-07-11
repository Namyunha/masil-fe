import React from 'react';

export default function RePasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="h-dvh w-full box-border flex flex-col px-5">
        {children}
      </div>
    </>
  );
}
