import clsx from 'clsx';

type loadingIndicator = React.ReactNode;

type buttonStatus = '다음' | '완료' | '인증번호 전송';

type PassButtonProps = {
  children: loadingIndicator | buttonStatus;
  errorState: boolean;
};

export default function PassButton({ children, errorState }: PassButtonProps) {
  return (
    <button
      className={clsx('rounded-lg p-12 font-bold', {
        [errorState
          ? 'bg-bg_disabled cursor-not-allowed text-button_text_disabled'
          : 'bg-primary text-white']: true,
      })}>
      {children}
    </button>
  );
}
