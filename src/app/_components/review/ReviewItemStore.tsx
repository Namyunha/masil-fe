import Icon from '@/components/Icon';
import { ReviewItemType } from '@/types/review';

type ReviewItemStoreProps = Pick<ReviewItemType, 'store'>;

export default function ReviewItemStore({ store }: ReviewItemStoreProps) {
  return (
    <div className="flex justify-between items-center p-2 pr-4 bg-bg_disabled rounded-md border-2">
      <div className="flex flex-col gap-1">
        <span className="font-bold">{store.name}</span>
        <span className="text-text_disabled">{store.address}</span>
      </div>
      <Icon name={store.isLike ? 'heart_full' : 'heart'} />
    </div>
  );
}
