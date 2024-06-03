import Icon from '@/components/Icon';
import { ReviewItemType } from '@/types/review';

type ReviewItemSubInfoProps = Pick<
  ReviewItemType,
  'isLike' | 'likeCount' | 'commentCount'
>;

export default function ReviewItemSubInfo({
  isLike,
  likeCount,
  commentCount,
}: ReviewItemSubInfoProps) {
  return (
    <div className="flex justify-between items-center px-4">
      <div className="flex items-center gap-1">
        <Icon name={isLike ? 'heart_full' : 'heart'} size={16} filter="GRAY" />
        <span className="text-text_disabled">{likeCount}</span>
      </div>
      <div className="flex items-center gap-1">
        <Icon name="comment" size={16} filter="GRAY" />
        <span className="text-text_disabled">{commentCount}</span>
      </div>
      <Icon name="share" size={16} filter="GRAY" />
    </div>
  );
}
