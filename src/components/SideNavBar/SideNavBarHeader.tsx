import Button from '../Button/Button';
import UserImage from '../UserImage';

type SideNavBarHeaderProps = {
  closeHandler: () => void;
};

export default function SideNavBarHeader({
  closeHandler,
}: SideNavBarHeaderProps) {
  // Todo: 유저 정보 저장 로직에 따라 재작업 필요
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-8">
        <UserImage src="/image/test_thumbnail.png" />
        <span className="text-14 font-bold">유저1</span>
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
