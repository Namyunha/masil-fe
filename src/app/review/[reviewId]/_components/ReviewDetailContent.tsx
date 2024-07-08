import { ReviewDetailType } from '@/types/review';

type ReviewDetailContentProps = Pick<ReviewDetailType, 'content'>;

export default function ReviewDetailContent({
  content,
}: ReviewDetailContentProps) {
  return <div className="whitespace-pre-wrap text-14">{content}</div>;
}
