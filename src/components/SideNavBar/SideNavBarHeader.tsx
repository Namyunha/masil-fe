'use client';

import { useQueryClient } from '@tanstack/react-query';
import Button from '../Button/Button';
import UserImage from '../UserImage';

type SideNavBarHeaderProps = {
  closeHandler: () => void;
};

type UserData = {
  data: {
    email: string;
    pw: string;
    profileImg: string;
    nickName: string;
  };
};

export default function SideNavBarHeader({
  closeHandler,
}: SideNavBarHeaderProps) {
  // Todo: 유저 정보 저장 로직에 따라 재작업 필요
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<UserData>(['Me']);

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-8">
        <UserImage src={`/image${data?.data.profileImg}.png`} />
        <span className="text-14 font-bold">{data?.data.nickName}</span>
      </div>
      <Button
        variant="secondary"
        childrenType="iconOnly"
        iconName="close"
        size="s"
        onClick={closeHandler}
      />
    </div>
  );
}
