'use client';
import clsx from 'clsx';
import { useModalStore } from '@/store/Ystore';
import AgreementForm from '../../_component/AgreementForm';

export default function LoginModal() {
  const modalState = useModalStore();
  return (
    <>
      <div
        onClick={(e) => {
          if (e.screenY < 535 || e.screenX < 325 || e.screenX > 648) {
            modalState.changeStatus();
          }
        }}
        className={clsx(
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
