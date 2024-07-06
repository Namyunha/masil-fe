import UserImage from '@/components/UserImage';
import { ReviewCommentType } from '@/types/review';
import { convertTime } from '@/utils/convertTime';

type ReviewDetailCommentBubbleProps = {
  commentInfo: ReviewCommentType;
};

export default function ReviewDetailCommentBubble({
  commentInfo,
}: ReviewDetailCommentBubbleProps) {
  const { profileImageUrl, nickName, createdAt, comment } = commentInfo;

  // Todo: 유저 정보 유지 기능 완료되면 더보기(수정, 삭제) 기능 추가
  return (
    <li className="flex items-center gap-16 px-16 py-12 rounded-full rounded-bl-none shadow-elevation2">
      <UserImage src={profileImageUrl} />
      <div className="flex flex-col items-start gap-[6px]">
        <div className="flex gap-8">
          <div className="font-bold text-14">{nickName}</div>
          <div className="text-text_light_grey text-12">
            {convertTime(createdAt)}
          </div>
        </div>

        <p className="text-left text-12">{comment}</p>
      </div>
    </li>
  );
}
