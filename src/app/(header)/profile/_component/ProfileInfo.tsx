import Image from 'next/image';
import React from 'react';
import Icon from '@/components/Icon';

function ProfileInfo() {
  return (
    <>
      <div className="flex w-full justify-between py-3 pl-3 pr-5">
        <div className="w-1/6 flex justify-start items-center">
          <Image
            src="/image/test_user.png"
            alt="userImage"
            width={72}
            height={72}
          />
        </div>
        <div className="w-4/6 flex flex-col justify-center relative bottom-1">
          <span className="relative top-2 font-bold">유저1</span>
          <span className="text-[13px] text-text_light_grey">
            seoui1217@gmail.com
          </span>
        </div>
        <div className="w-1/6 flex justify-end items-center">
          <Icon name="setting" />
        </div>
      </div>
    </>
  );
}

export default ProfileInfo;
