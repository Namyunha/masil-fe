import clsx from 'clsx';

type PassButtonProps = {
  label: string;
  errorState: boolean;
};

export default function PassButton({ label, errorState }: PassButtonProps) {
  return (
    <button
      className={clsx(
        {
          [errorState
            ? 'bg-bg_disabled cursor-not-allowed text-button_text_disabled'
            : 'bg-primary text-white']: true,
        },
        'rounded-lg',
        'p-12',
        'font-bold'
      )}>
      {label}
    </button>
  );
}
