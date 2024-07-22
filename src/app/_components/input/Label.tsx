import clsx from 'clsx';
import React from 'react';

export default function Label({
  labelName,
  filled,
  isDisabled,
}: {
  labelName: string;
  filled?: string;
  isDisabled: boolean;
}) {
  return (
    <label
      htmlFor={filled}
      className={clsx(
        'absolute text-zinc-400 duration-300 -translate-y-3 scale-75 max:scale-50 top-4 max:top-3 z-5 origin-[0] start-3',
        !isDisabled &&
          'transform peer-placeholder-shown:scale-105 max:peer-placeholder-shown:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:text-gray-300 peer-focus:scale-75 max:peer-focus:scale-50 peer-focus:-translate-y-3'
      )}>
      {labelName}
    </label>
  );
}
