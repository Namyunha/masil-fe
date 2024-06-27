import { useRouter } from 'next/navigation';
import React from 'react';
import Icon from '@/components/Icon';
import { progessCondition, useRegisterStore } from '@/store/userStore';
import ProgressBar from './_component/ProgressBar';

export default function ProgessBarContainer() {
  const userInfo = useRegisterStore();
  const router = useRouter();
  const currentProgessCondition = progessCondition();
  const onRouterHandler = (data: number) => {
    if (currentProgessCondition.currentProgess === 1 && data < 0) {
      userInfo.resetProfile();
      router.back();
      return;
    }
    currentProgessCondition.setProgessCondition(
      currentProgessCondition.currentProgess + data
    );
  };
  return (
    <div className="flex flex-col fixed top-0 left-0 box-border w-full h-1/5 justify-center p-10">
      <div className="flex justify-between">
        <span onClick={() => onRouterHandler(-1)}>
          <Icon className="cursor-pointer mb-2" name="arrow_left" size={24} />
        </span>
        <span onClick={() => onRouterHandler(1)}>
          <Icon className="cursor-pointer mb-2" name="arrow_right" size={24} />
        </span>
      </div>
      <ProgressBar />
    </div>
  );
}
