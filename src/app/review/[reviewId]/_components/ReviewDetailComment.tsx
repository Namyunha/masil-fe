'use client';

import { useReviewCommentListQuery } from '@/api/review/queries';
import ReviewDetailCommentBubble from './ReviewDetailCommentBubble';
import ReviewDetailCommentWrite from './ReviewDetailCommentWrite';

type ReviewDetailCommentProps = {
  reviewId: string;
};

export default function ReviewDetailComment({
  reviewId,
}: ReviewDetailCommentProps) {
  // Todo: 로딩일 시 스켈레톤 UI & 에러 처리하기
  // Todo: 로그인 시에만 댓글 작성할 수 있도록 수정
  const { data, isSuccess } = useReviewCommentListQuery({ reviewId });

  return (
    <section className="px-20 pb-24">
      <ul className="flex flex-col gap-24">
        <ReviewDetailCommentWrite reviewId={reviewId} />
        {isSuccess &&
          data.data.comments.map((comment) => (
            <ReviewDetailCommentBubble
              key={comment.commentId}
              reviewId={reviewId}
              commentInfo={comment}
            />
          ))}
      </ul>
    </section>
  );
}
