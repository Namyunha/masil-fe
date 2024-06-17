import clsx from 'clsx';

type ReviewFilterTabProps = {
  isActive: boolean;
  value: string;
  onClick: () => void;
};

export default function ReviewFilterTab({
  isActive,
  value,
  onClick,
}: ReviewFilterTabProps) {
  return (
    <li
      className={clsx(
        'px-8 py-6 text-12 border rounded-full whitespace-nowrap',
        {
          ['text-text_white bg-primary border-stroke_focused']: isActive,
          ['text-text_grey border-stroke_grey']: !isActive,
        }
      )}
      onClick={onClick}>
      {value}
    </li>
  );
}
