import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { ReviewItemType } from '@/types/review';

type ReviewItemContentProps = Pick<
  ReviewItemType,
  'content' | 'likeCount' | 'commentCount'
>;

export default function ReviewItemContent({
  content,
  likeCount,
  commentCount,
}: ReviewItemContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = contentRef.current;

    if (element) {
      setIsOverflowing(element.scrollWidth > element.clientWidth);
    }
  }, [content]);

  const handleToggleExpand = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col gap-8 px-8">
      <p>
        <em className="not-italic text-14 font-bold">{likeCount}명</em>이
        좋아합니다
      </p>
      <div className="flex text-14 gap-8">
        <p
          ref={contentRef}
          className={clsx({
            ['block overflow-hidden whitespace-nowrap']: !isExpanded,
          })}>
          {content}
        </p>
        {!isExpanded && isOverflowing && (
          <button
            className="text-text_grey flex-shrink-0"
            onClick={handleToggleExpand}>
            ...더보기
          </button>
        )}
      </div>
      <p className="text-12 text-text_grey">
        댓글 {commentCount ? `${commentCount}개` : `없음`}
      </p>
    </div>
  );
}
