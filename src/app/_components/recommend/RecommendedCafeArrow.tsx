import Icon from '@/components/Icon';

type RecommendedCafeArrowProps = {
  leftClickHandler: () => void;
  rightClickHandler: () => void;
};

export default function RecommendedCafeArrow({
  leftClickHandler,
  rightClickHandler,
}: RecommendedCafeArrowProps) {
  return (
    <>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 flex w-24 h-24 items-center"
        onClick={leftClickHandler}>
        <Icon name="arrow_left" size={16} filter="PRIMARY" />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 flex w-24 h-24 items-center flex-row-reverse"
        onClick={rightClickHandler}>
        <Icon name="arrow_right" size={16} filter="PRIMARY" />
      </button>
    </>
  );
}
