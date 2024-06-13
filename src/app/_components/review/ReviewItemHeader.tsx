import Image from 'next/image';
import Icon from '@/components/Icon';
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
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-40 h-40 border-2 border-gray-200 rounded-full overflow-hidden">
          <Image src={profileImageUrl} alt="profile" width={36} height={36} />
        </div>
        <span className="font-bold">{nickName}</span>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-1 items-center">
          <Icon name="star" size={16} />
          {rating}
        </div>
        <span className="text-text_light_grey">{convertTime(createdAt)}</span>
      </div>
    </div>
  );
}
