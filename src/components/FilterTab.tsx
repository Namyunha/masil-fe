import clsx from 'clsx';
import { TAGS } from '@/constants/reviewFilter';
import TagIcon from './TagIcon';

type FilterTabProps = {
  isActive?: boolean;
  value: string;
  iconName?: keyof typeof TAGS;
  onClick?: () => void;
};

export default function FilterTab({
  isActive = false,
  value,
  iconName,
  onClick,
}: FilterTabProps) {
  return (
    <div
      className={clsx(
        'flex gap-[4px] px-8 py-6 text-12 border cursor-pointer rounded-full whitespace-nowrap shadow-elevation1',
        {
          ['text-text_white bg-primary border-stroke_focused']: isActive,
          ['text-text_grey border-stroke_grey']: !isActive,
        }
      )}
      onClick={onClick}>
      {iconName && <TagIcon name={iconName} />}
      {value}
    </div>
  );
}
