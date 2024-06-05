'use client';
import clsx from 'clsx';
import { useModalStore } from '@/store/userStore';
import AgreementForm from '../_component/AgreementForm';

export default function LoginModal() {
  const modalState = useModalStore();
  return (
    <>
      <div
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          if (typeof e.target.className === 'string') {
            if (e.target.className.includes('background')) {
              modalState.changeStatus();
            }
          }
        }}
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
    </>
  );
}
