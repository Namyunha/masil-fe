import Icon from '@/components/Icon';
import UserImage from '@/components/UserImage';
import { ReviewItemType } from '@/types/review';
import { convertTime } from '@/utils/convertTime';

type ReviewItemHeaderProps = Pick<
  ReviewItemType,
  'profileImageUrl' | 'nickName' | 'rating' | 'createdAt'
>;

export default function ReviewItemHeader({
  profileImageUrl,
  nickName,
  rating,
  createdAt,
}: ReviewItemHeaderProps) {
  return (
    <div className="flex items-center justify-between px-8">
      <div className="flex items-center gap-2">
        <UserImage src={profileImageUrl} />
        <span className="text-14 font-bold">{nickName}</span>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-1 items-center justify-end">
          <Icon name="star" size={8} />
          <span className="text-12">{rating}</span>
        </div>
        <span className="text-12 text-text_grey">{convertTime(createdAt)}</span>
      </div>
    </div>
  );
}
