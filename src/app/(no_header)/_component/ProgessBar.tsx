import React from 'react';
import Icon from '@/components/Icon';

export default function ProgessBar() {
  return (
    <div className="flex flex-col fixed top-0 left-0 box-border w-full p-10 mt-4">
      <Icon className="cursor-pointer mb-2" name="arrow_left" size={24} />
      <div className="w-full bg-gray rounded-lg h-2.5 dark:bg-gray-700">
        <div className="bg-primary w-1/4 h-2.5 rounded-lg" />
      </div>
    </div>
  );
}
