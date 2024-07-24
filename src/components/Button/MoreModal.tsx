import clsx from 'clsx';
import Dim from '../Dim';
import Button from './Button';

type MoreModalProps = {
  isOpen: boolean;
  closeHandler: () => void;
  deleteHandler: () => void;
  updateHandler: () => void;
};

export default function MoreModal({
  isOpen,
  closeHandler,
  deleteHandler,
  updateHandler,
}: MoreModalProps) {
  return (
    <>
      {isOpen && <Dim closeHandler={closeHandler} />}
      <div
        className={clsx(
          'fixed left-0 right-0 bottom-0 max-w-screen_max mx-auto my-0 p-32 flex flex-col z-modal gap-8 bg-bg_white border border-stroke_grey rounded-t-3xl transition-transform duration-300',
          {
            ['translate-y-0']: isOpen,
            ['translate-y-full']: !isOpen,
          }
        )}>
        <div className="flex justify-between items-center">
          <Button
            variant="secondary"
            childrenType="iconOnly"
            iconName="close"
            size="s"
            className="absolute right-16"
            onClick={closeHandler}
          />
        </div>
        <div
          onClick={() => {
            updateHandler();
            closeHandler();
          }}
          className="p-16 text-20 font-bold text-center cursor-pointer border-b border-stroke_grey">
          수정하기
        </div>
        <div
          onClick={() => {
            deleteHandler();
            closeHandler();
          }}
          className="p-16 text-20 font-bold text-center text-text_error cursor-pointer">
          삭제하기
        </div>
      </div>
    </>
  );
}
