'use client';
import clsx from 'clsx';
import { useModalStore } from '@/store/userStore';
import AgreementForm from '../_component/AgreementForm';

export default function LoginModal() {
  const modalState = useModalStore();
  const closeModalHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = e.target as HTMLElement;
    typeof target.className === 'string' &&
      target.className.includes('background') &&
      modalState.changeStatus();
  };
  return (
    <div
      onClick={closeModalHandler}
      className={clsx(
        'overflow-hidden',
        'background',
        'w-dvw',
        'h-dvh',
        'flex',
        'absolute',
        'bottom-0',
        'z-modal',
        'justify-center',
        'bg-zinc-950/50',
        { ['invisible']: !modalState.modalStatus }
      )}>
      <AgreementForm />
    </div>
  );
}
