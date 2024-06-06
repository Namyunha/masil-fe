'use client';
import clsx from 'clsx';
import { useModalStore } from '@/store/userStore';
import AgreementForm from '../_component/AgreementForm';

export default function LoginModal() {
  const modalState = useModalStore();
  const closeModalHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    typeof e.target.className === 'string' &&
      e.target.className.includes('background') &&
      modalState.changeStatus();
  };
  return (
    <div
      onClick={closeModalHandler}
      className={clsx(
        'background',
        'w-dvw',
        'h-dvh',
        'flex',
        'absolute',
        'bottom-0',
        'z-10',
        'justify-center',
        'bg-zinc-950/50',
        { ['invisible']: !modalState.modalStatus }
      )}>
      <AgreementForm />
    </div>
  );
}
