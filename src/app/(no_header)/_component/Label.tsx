import React from 'react';

export default function Label({
  labelName,
  filled,
}: {
  labelName: string;
  filled?: string;
}) {
  return (
    <label
      htmlFor={filled ? filled : 'small_filled'}
      className="absolute text-zinc-400 duration-300 transform -translate-y-3 scale-75 max:scale-50 top-4 max:top-3 z-5 origin-[0] start-3 
                peer-placeholder-shown:scale-105 max:peer-placeholder-shown:scale-75 peer-placeholder-shown:translate-y-0 
                peer-focus:text-gray-300 	peer-focus:scale-75 max:peer-focus:scale-50 peer-focus:-translate-y-3">
      {labelName}
    </label>
  );
}
