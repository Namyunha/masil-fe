import { useRouter } from 'next/navigation';
import { ROUTE_PATH } from '@/constants/route';
import { ReviewItemType } from '@/types/review';
import ReviewItemContent from './ReviewItemContent';
import ReviewItemHeader from './ReviewItemHeader';
import ReviewItemStore from './ReviewItemStore';
import ReviewItemSubInfo from './ReviewItemSubInfo';

export default function ReviewItem({ ...review }: ReviewItemType) {
  const router = useRouter();

  const onClickReviewItem = () => {
    router.push(ROUTE_PATH.REVIEW_DETAIL(review.reviewId.toString()));
  };

  return (
    <li
      className="flex flex-col gap-2 py-4 border-b-2"
      onClick={onClickReviewItem}
      tabIndex={0}>
      <ReviewItemHeader
        profileImageUrl={review.profileImageUrl}
        nickName={review.nickName}
        rating={review.rating}
        createdAt={review.createdAt}
      />
      <ReviewItemContent
        content={review.content}
        reviewImageUrls={review.reviewImageUrls}
      />
      <ReviewItemStore store={review.store} />
      <ReviewItemSubInfo
        isLike={review.isLike}
        likeCount={review.likeCount}
        commentCount={review.commentCount}
      />
    </li>
  );
}
