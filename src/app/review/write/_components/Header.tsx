import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import ActiveButton from '@/app/_components/ActiveButton';
import { reviewStore } from '@/store/userStore';

function Header() {
  const reviewStatus = reviewStore();
  const router = useRouter();

  const backBtnHandler = () => {
    reviewStatus.setResetReviewState();
    router.push('/');
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-2 bg-bg_white shadow-elevation1 absolute px-7 py-3 top-0 left-0 z-modal w-full">
        <span
          onClick={backBtnHandler}
          className="text-16 text-text_light_grey hover:text-text_grey cursor-pointer">
          취소
        </span>
        <span>
          <ActiveButton
            errorState={
              !reviewStatus.content ||
              !reviewStatus.likeCategory.length ||
              !reviewStatus.cafeLoca ||
              !reviewStatus.cafeName ||
              !reviewStatus.rate ||
              !reviewStatus.imgFiles.length
            }
            size="xs">
            완료
          </ActiveButton>
        </span>
      </div>
      <div className="flex mt-[50px]">
        <Image
          src="/image/test_user.png"
          alt="userImage"
          width={45}
          height={45}
        />
        <span className="flex items-center">User1</span>
      </div>
    </div>
  );
}

export default Header;
