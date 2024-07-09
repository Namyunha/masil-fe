import React from 'react';

export default function SignHeader({
  children,
}: {
  children: React.ReactNode | string;
}) {
  return (
    <div className="max:text-16 text-20">
      <p className="font-bold">{children}</p>
    </div>
  );
}
