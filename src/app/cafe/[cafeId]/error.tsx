'use client';

import React from 'react';

type ErrorComponentProps = {
  errorMessage: string;
};

// Todo: 에러 화면 구상하기
export default function ErrorComponent({ errorMessage }: ErrorComponentProps) {
  return (
    <div>
      <p>{errorMessage}</p>
    </div>
  );
}
