import { useRouter } from 'next/navigation';
import { ROUTE_PATH } from '@/constants/route';
import { ReviewItemType } from '@/types/review';
import ReviewItemButtons from './ReviewItemButtons';
import ReviewItemCafeInfo from './ReviewItemCafeInfo';
import ReviewItemContent from './ReviewItemContent';
import ReviewItemHeader from './ReviewItemHeader';
import ReviewItemImages from './ReviewItemImages';

export default function ReviewItem({ ...review }: ReviewItemType) {
  const router = useRouter();

  const onClickReviewItem = () => {
    router.push(ROUTE_PATH.REVIEW_DETAIL(review.reviewId));
  };

  return (
    <li
      className="flex flex-col gap-8 p-16 rounded-2xl shadow-elevation2 cursor-pointer"
      onClick={onClickReviewItem}
      tabIndex={0}>
      <ReviewItemHeader
        profileImageUrl={review.profileImageUrl}
        nickName={review.nickName}
        rating={review.rating}
        createdAt={review.createdAt}
      />
      <ReviewItemImages reviewImageUrls={review.reviewImageUrls} />
      <ReviewItemButtons reviewId={review.reviewId} isLike={review.isLike} />
      <ReviewItemContent
        content={review.content}
        likeCount={review.likeCount}
        commentCount={review.commentCount}
      />
      <ReviewItemCafeInfo cafeInfo={review.cafeInfo} />
    </li>
  );
}
