import clsx from 'clsx';
import Button from '@/components/Button/Button';
import Dim from '@/components/Dim';
import ReviewFilterModalLocation from './ReviewFilterModalLocation';
import ReviewFilterModalSorting from './ReviewFilterModalSorting';
import ReviewFilterModalTags from './ReviewFilterModalTags';

type ReviewFilterModalProps = {
  isOpen: boolean;
  closeHandler: () => void;
};

export default function ReviewFilterModal({
  isOpen,
  closeHandler,
}: ReviewFilterModalProps) {
  // Todo: 확인 눌러야 적용시킬지 기획과 논의 필요
  return (
    <>
      {isOpen && <Dim closeHandler={closeHandler} />}
      <div
        className={clsx(
          'fixed left-0 right-0 bottom-0 max-w-screen_max mx-auto my-0 p-16 flex flex-col z-modal gap-8 bg-bg_white border border-stroke_grey rounded-t-3xl transition-transform duration-300',
          {
            ['translate-y-0']: isOpen,
            ['translate-y-full']: !isOpen,
          }
        )}>
        <div className="flex justify-between items-center">
          <div className="flex-1 text-center text-16 font-bold">검색 필터</div>
          <Button
            variant="secondary"
            childrenType="iconOnly"
            iconName="close"
            size="xs"
            className="absolute right-16"
            onClick={closeHandler}
          />
        </div>
        <ReviewFilterModalSorting />
        <ReviewFilterModalTags />
        <ReviewFilterModalLocation />
      </div>
    </>
  );
}
