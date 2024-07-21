import ReviewDetailComment from './_components/ReviewDetailComment';
import ReviewDetailMain from './_components/ReviewDetailMain';

type ReviewDetailProps = {
  params: {
    reviewId: string;
  };
};

export default async function ReviewDetail({ params }: ReviewDetailProps) {
  const { reviewId } = params;

  return (
    <div className="h-full">
      <ReviewDetailMain reviewId={reviewId} />
      <ReviewDetailComment reviewId={reviewId} />
    </div>
  );
}
