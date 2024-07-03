import React from 'react';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
  agreement: React.ReactNode;
}) {
  return (
    <>
      <section className="flex justify-center overflow-hidden h-full">
        <div className="pt-10">{children}</div>
      </section>
    </>
  );
}
