import React from 'react';
import Dim from '@/components/Dim';
import LogOutModal from './LogOutModal';

type LogOutFormProps = {
  setModal: () => void;
};

function LogOutForm({ setModal }: LogOutFormProps) {
  return (
    <>
      <Dim closeHandler={() => setModal()} />
      <LogOutModal closeHandler={() => setModal()} />
    </>
  );
}

export default LogOutForm;
