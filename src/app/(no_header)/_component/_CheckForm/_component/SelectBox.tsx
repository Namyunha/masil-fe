import Icon from '@/components/Icon';

type SelectBoxProps = {
  isChecked: boolean;
  onCheckHandler: () => void;
};

export default function SelectBox({
  isChecked,
  onCheckHandler,
}: SelectBoxProps) {
  return (
    <span className="cursor-pointer" onClick={onCheckHandler}>
      {isChecked ? (
        <Icon name="checkbox_check" filter="PRIMARY" />
      ) : (
        <Icon name="checkbox" filter="PRIMARY" />
      )}
    </span>
  );
}
