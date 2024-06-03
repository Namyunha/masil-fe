import Image from 'next/image';
import { ReviewItemType } from '@/types/review';

type ReviewItemContentProps = Pick<
  ReviewItemType,
  'content' | 'reviewImageUrls'
>;

export default function ReviewItemContent({
  content,
  reviewImageUrls,
}: ReviewItemContentProps) {
  return (
    <>
      <p>{content}</p>
      <ul className="flex gap-1 h-[140px] rounded-md overflow-hidden">
        {!!reviewImageUrls.length &&
          reviewImageUrls.map((img) => (
            <li key={img.id} className="relative flex-grow">
              <Image
                src={img.url}
                alt={img.url}
                fill={true}
                sizes="flex-1"
                priority
              />
            </li>
          ))}
      </ul>
    </>
  );
}
