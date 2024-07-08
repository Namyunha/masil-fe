import ReviewDetailComment from './_components/ReviewDetailComment';
import ReviewDetailHeader from './_components/ReviewDetailHeader';
import ReviewDetailMain from './_components/ReviewDetailMain';

type ReviewDetailProps = {
  params: {
    reviewId: string;
  };
};

export default async function ReviewDetail({ params }: ReviewDetailProps) {
  const { reviewId } = params;

  return (
    <>
      <ReviewDetailHeader />
      <ReviewDetailMain reviewId={reviewId} />
      <ReviewDetailComment reviewId={reviewId} />
    </>
  );
}
