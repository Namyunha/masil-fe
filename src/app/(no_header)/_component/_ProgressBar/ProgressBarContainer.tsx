import { useRouter } from 'next/navigation';
import React from 'react';
import Icon from '@/components/Icon';
import {
  progressCondition,
  useRegisterStore,
  validateCondition,
} from '@/store/userStore';
import ProgressBar from './_component/ProgressBar';

type directionValue = 'prev' | 'next';

export default function ProgressBarContainer() {
  const validate = validateCondition();
  const userInfo = useRegisterStore();
  const router = useRouter();
  const currentProgressCondition = progressCondition();

  const onRouterHandler = (direction: directionValue) => {
    if (
      direction === 'prev' &&
      currentProgressCondition.currentProgress === 1
    ) {
      userInfo.resetProfile();
      validate.setValidateState(false);
      validate.setValidateNum('');
      userInfo.setAgreement(false);
      router.back();
      return;
    }
    if (
      direction === 'next' &&
      currentProgressCondition.currentProgress === 4
    ) {
      if (!userInfo.email || !validate.validateStatus) {
        currentProgressCondition.setProgressCondition(1);
        return;
      }
      if (!userInfo.agreement) {
        currentProgressCondition.setProgressCondition(2);
        return;
      }
      if (!userInfo.userInfo.pw) {
        currentProgressCondition.setProgressCondition(3);
        return;
      }
      if (!userInfo.userInfo.nickName) {
        currentProgressCondition.setProgressCondition(4);
        return;
      }
    }
    currentProgressCondition.setProgressCondition(
      direction === 'prev'
        ? currentProgressCondition.currentProgress - 1
        : currentProgressCondition.currentProgress + 1
    );

    // (direction.next || direction.prev)
  };

  return (
    <div className="flex flex-col fixed top-0 left-0 box-border w-full h-1/5 justify-center p-10">
      <div className="flex justify-between">
        <span onClick={() => onRouterHandler('prev')}>
          <Icon className="cursor-pointer mb-2" name="arrow_left" size={24} />
        </span>
        <span onClick={() => onRouterHandler('next')}>
          <Icon className="cursor-pointer mb-2" name="arrow_right" size={24} />
        </span>
      </div>
      <ProgressBar />
    </div>
  );
}
