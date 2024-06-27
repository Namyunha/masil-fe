'use client';

import React from 'react';
import { progessCondition } from '@/store/userStore';

export default function ProgressBar() {
  const progessStatus = progessCondition();
  let content;
  switch (progessStatus.currentProgess) {
    case 1:
      content = <div className={`bg-primary w-1/4 h-2.5 rounded-lg`} />;
      break;
    case 2:
      content = <div className={`bg-primary w-2/4 h-2.5 rounded-lg`} />;
      break;
    case 3:
      content = <div className={`bg-primary w-3/4 h-2.5 rounded-lg`} />;
      break;
    case 4:
      content = <div className={`bg-primary w-4/4 h-2.5 rounded-lg`} />;
      break;
  }
  return (
    <div className="w-full bg-gray rounded-lg h-2.5 dark:bg-gray-700">
      {content}
    </div>
  );
}
