import Icon from '@/components/Icon';

export default function ReviewFilter() {
  return (
    <div className="flex gap-8">
      <button className="px-12 py-6 rounded-xl border border-stroke_grey">
        <Icon name="filter" size={20} filter="GRAY" />
      </button>
      <div className="h-[34px] w-[1px] border-r border-stroke_grey" />
    </div>
  );
}
