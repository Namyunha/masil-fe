type ReviewFilterModalTitleProps = {
  title: string;
  subInfo: string;
};

export default function ReviewFilterModalTitle({
  title,
  subInfo,
}: ReviewFilterModalTitleProps) {
  return (
    <div className="flex items-center gap-8 px-8 py-12 text-14">
      <span className="font-bold">{title}</span>
      <span className="text-12 text-text_light_grey">{subInfo}</span>
    </div>
  );
}
