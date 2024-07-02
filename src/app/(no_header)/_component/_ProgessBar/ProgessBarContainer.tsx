import { useRouter } from 'next/navigation';
import React from 'react';
import Icon from '@/components/Icon';
import {
  progessCondition,
  useRegisterStore,
  validateCondition,
} from '@/store/userStore';
import ProgressBar from './_component/ProgressBar';

type directionValue = 'prev' | 'next';

export default function ProgessBarContainer() {
  const validate = validateCondition();
  const userInfo = useRegisterStore();
  const router = useRouter();
  const currentProgessCondition = progessCondition();

  const onRouterHandler = (direction: directionValue) => {
    if (direction === 'prev' && currentProgessCondition.currentProgess === 1) {
      userInfo.resetProfile();
      validate.setValidateState(false);
      validate.setValidateNum('');
      userInfo.setAgreement(false);
      router.back();
      return;
    }
    if (direction === 'next' && currentProgessCondition.currentProgess === 4) {
      if (!userInfo.email || !validate.validateStatus) {
        currentProgessCondition.setProgessCondition(1);
        return;
      }
      if (!userInfo.agreement) {
        currentProgessCondition.setProgessCondition(2);
        return;
      }
      if (!userInfo.userInfo.pw) {
        currentProgessCondition.setProgessCondition(3);
        return;
      }
      if (!userInfo.userInfo.nickName) {
        currentProgessCondition.setProgessCondition(4);
        return;
      }
    }
    currentProgessCondition.setProgessCondition(
      direction === 'prev'
        ? currentProgessCondition.currentProgess - 1
        : currentProgessCondition.currentProgess + 1
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
