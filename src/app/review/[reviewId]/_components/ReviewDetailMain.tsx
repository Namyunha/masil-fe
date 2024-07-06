import { getReviewDetail } from '@/api/server';
import ReviewItemCafeInfo from '@/app/_components/review/ReviewItem/ReviewItemCafeInfo';
import ReviewItemHeader from '@/app/_components/review/ReviewItem/ReviewItemHeader';
import ReviewItemImages from '@/app/_components/review/ReviewItem/ReviewItemImages';
import ErrorComponent from '../error';
import ReviewDetailContent from './ReviewDetailContent';
import ReviewDetailRating from './ReviewDetailRating';
import ReviewDetailSubInfo from './ReviewDetailSubInfo';
import ReviewDetailTags from './ReviewDetailTags';

type ReviewDetailMainProps = { reviewId: string };

export default async function ReviewDetailMain({
  reviewId,
}: ReviewDetailMainProps) {
  const { data, error } = await getReviewDetail(reviewId);
  const { data: reviewDetail } = data!;
  const {
    profileImageUrl,
    nickName,
    rating,
    createdAt,
    reviewImageUrls,
    cafeInfo,
    content,
    tags,
    isLike,
    likeCount,
  } = reviewDetail;

  if (error) {
    return <ErrorComponent errorMessage={error} />;
  }

  return (
    <main className="flex flex-col gap-16 px-20 py-24">
      <div className="flex flex-col gap-12">
        <ReviewItemHeader
          profileImageUrl={profileImageUrl}
          nickName={nickName}
          createdAt={createdAt}
        />
        <div className="flex flex-col gap-24">
          <ReviewItemImages reviewImageUrls={reviewImageUrls} />
          <ReviewDetailContent content={content} />
          <ReviewDetailRating rating={rating} />
          <ReviewDetailTags tags={tags} />
        </div>
        <ReviewItemCafeInfo cafeInfo={cafeInfo} />
      </div>
      <span className="h-[1px] border-b border-bg_disabled" />
      <ReviewDetailSubInfo
        reviewId={+reviewId}
        isLike={isLike}
        likeCount={likeCount}
      />
    </main>
  );
}
