import clsx from 'clsx';

type PassButtonProps = {
  errorState: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function PassButton({ errorState, ...props }: PassButtonProps) {
  return (
    <button
      className={clsx('rounded-lg p-12 font-bold', {
        [errorState
          ? 'bg-bg_disabled cursor-not-allowed text-button_text_disabled'
          : 'bg-primary text-white']: true,
      })}>
      {props.children}
    </button>
  );
}
