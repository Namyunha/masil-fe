import clsx from 'clsx';

type FilterTabProps = {
  isActive: boolean;
  value: string;
  onClick?: () => void;
};

export default function FilterTab({
  isActive,
  value,
  onClick,
}: FilterTabProps) {
  return (
    <div
      className={clsx(
        'px-8 py-6 text-12 border cursor-pointer rounded-full whitespace-nowrap shadow-elevation1',
        {
          ['text-text_white bg-primary border-stroke_focused']: isActive,
          ['text-text_grey border-stroke_grey']: !isActive,
        }
      )}
      onClick={onClick}>
      {value}
    </div>
  );
}
