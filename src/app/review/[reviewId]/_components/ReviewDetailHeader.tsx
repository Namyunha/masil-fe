'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import HeaderIcon from '@/components/Header/HeaderIcon';
import { ROUTE_PATH } from '@/constants/route';

export default function ReviewDetailHeader() {
  const router = useRouter();
  const backClickHandler = () => {
    router.push(ROUTE_PATH.HOME);
  };

  // Todo: 본인 리뷰일 경우 더보기 버튼 나타내기
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
