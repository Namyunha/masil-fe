import { CafeItemType } from '@/types/cafe';

type CafeItemTitleProps = Pick<CafeItemType, 'cafeName'>;

export default function CafeItemTitle({ cafeName }: CafeItemTitleProps) {
  return <span className="text-18 font-bold">{cafeName}</span>;
}
