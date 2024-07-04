import { useRouter } from 'next/navigation';
import React from 'react';
import Icon from '@/components/Icon';
import {
  progressCondition,
  userRegisterStore,
  validateCondition,
} from '@/store/userStore';
import ProgressBar from './_component/ProgressBar';

type directionValue = 'prev' | 'next';

export default function ProgressBarContainer() {
  const validateState = validateCondition();
  const userInfoState = userRegisterStore();
  const ProgressState = progressCondition();
  const router = useRouter();

  const onRouterHandler = (direction: directionValue) => {
    if (direction === 'prev' && ProgressState.currentProgress === 1) {
      userInfoState.resetProfile();
      validateState.setConfirmState(false);
      validateState.setValidateNum('');
      validateState.setAgreement(false);
      router.back();
      return;
    }
    ProgressState.setProgressCondition(
      direction === 'prev'
        ? ProgressState.currentProgress - 1
        : ProgressState.currentProgress + 1
    );
  };

  return (
    <div className="flex flex-col box-border w-full h-1/6 justify-center max-w-screen_max px-10">
      <div className="flex justify-between">
        <span onClick={() => onRouterHandler('prev')}>
          <Icon className="cursor-pointer mb-2" name="arrow_left" size={24} />
        </span>
        {ProgressState.currentProgress < 4 && (
          <span onClick={() => onRouterHandler('next')}>
            <Icon
              className="cursor-pointer mb-2"
              name="arrow_right"
              size={24}
            />
          </span>
        )}
      </div>
      <ProgressBar />
    </div>
  );
}
