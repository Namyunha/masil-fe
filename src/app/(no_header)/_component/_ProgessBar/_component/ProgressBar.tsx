'use client';

import React from 'react';
import { progessCondition } from '@/store/userStore';

export default function ProgressBar() {
  const progessStatus = progessCondition();
  const getContent = () => {
    switch (progessStatus.currentProgess) {
      case 1:
        return <div className="bg-primary w-1/4 h-2.5 rounded-lg" />;
      case 2:
        return <div className="bg-primary w-2/4 h-2.5 rounded-lg" />;
      case 3:
        return <div className="bg-primary w-3/4 h-2.5 rounded-lg" />;
      case 4:
        return <div className="bg-primary w-4/4 h-2.5 rounded-lg" />;
    }
  };
  return (
    <div className="w-full bg-gray rounded-lg h-2.5 dark:bg-gray-700">
      {getContent()}
    </div>
  );
}
