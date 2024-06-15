import Icon from '@/components/Icon';
import { ReviewItemType } from '@/types/review';

type ReviewItemButtonsProps = Pick<ReviewItemType, 'isLike'>;

export default function ReviewItemButtons({ isLike }: ReviewItemButtonsProps) {
  return (
    <div className="flex justify-between items-center px-8">
      <div className="flex items-center gap-16">
        <Icon name={isLike ? 'heart_full' : 'heart'} />
        <Icon name="comment" />
      </div>
      <Icon name="upload" />
    </div>
  );
}
