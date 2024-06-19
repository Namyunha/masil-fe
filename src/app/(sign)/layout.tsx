import React from 'react';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="flex justify-center">
        <div>{children}</div>
      </section>
    </>
  );
}
