'use client';

import { useRouter } from 'next/navigation';
import Button from '../Button';
import HeaderIcon from './HeaderIcon';

// Todo: 유저 정보 유지 기능 완료되면 더보기(수정, 삭제) 기능 추가 및 주석 해제
// type DetailHeaderProps = {
//   changeClickHandler: () => void;
//   deleteClickHandler: () => void;
// };

export default function DetailHeader() {
  const router = useRouter();
  const backClickHandler = () => {
    router.back();
  };

  return (
    <header className="sticky top-0 flex justify-center items-center z-float py-12 bg-bg_white shadow-elevation1">
      <Button
        className="absolute left-20"
        onClick={backClickHandler}
        variant="secondary"
        size="s"
        childrenType="iconOnly"
        iconName="arrow_left"
      />
      <HeaderIcon />
    </header>
  );
}
