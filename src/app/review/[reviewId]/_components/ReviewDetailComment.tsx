'use client';

import { useReviewCommentListQuery } from '@/api/review/queries';
import ReviewDetailCommentBubble from './ReviewDetailCommentBubble';

type ReviewDetailCommentProps = {
  reviewId: string;
};

export default function ReviewDetailComment({
  reviewId,
}: ReviewDetailCommentProps) {
  // Todo: 로딩일 시 스켈레톤 UI & 에러 처리하기
  const { data, isSuccess } = useReviewCommentListQuery({ reviewId });

  return (
    <section className="px-20 pb-24">
      <ul className="flex flex-col gap-24">
        {isSuccess &&
          data.data.comments.map((comment) => (
            <ReviewDetailCommentBubble
              key={comment.commentId}
              commentInfo={comment}
            />
          ))}
      </ul>
    </section>
  );
}
