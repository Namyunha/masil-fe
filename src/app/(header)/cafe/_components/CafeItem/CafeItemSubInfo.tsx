import { CafeItemType } from '@/types/cafe';

type CafeItemSubInfoProps = Pick<CafeItemType, 'cafeLoca'>;

export default function CafeItemSubInfo({ cafeLoca }: CafeItemSubInfoProps) {
  return <span className="text-14 text-text_grey">{cafeLoca}</span>;
}
