import React from 'react';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="flex justify-center overflow-hidden w-full h-full">
        <div className="pt-3 w-full">{children}</div>
      </section>
    </>
  );
}
