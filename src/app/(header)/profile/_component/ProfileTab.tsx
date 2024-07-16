'use client';

import clsx from 'clsx';
import React from 'react';
import { profileTabState } from '@/store/userStore';

function ProfileTab() {
  const currentTabState = profileTabState();

  return (
    <div className="w-full flex justify-center">
      <div
        className={clsx(
          'w-1/2 flex justify-center pb-2',
          currentTabState.tabState === '작성한 리뷰'
            ? 'border-b-[3px]'
            : 'border-b-[1px] border-stroke_grey'
        )}>
        <div
          onClick={() => currentTabState.setTabState('작성한 리뷰')}
          className={clsx(
            'cursor-pointer',
            currentTabState.tabState === '작성한 리뷰'
              ? 'font-bold'
              : 'text-text_light_grey'
          )}>
          내가 쓴 리뷰(3)
        </div>
      </div>
      <div
        className={clsx(
          'w-1/2 flex justify-center pb-2',
          currentTabState.tabState === '스크랩한 리뷰'
            ? 'border-b-[3px]'
            : 'border-b-[1px] border-stroke_grey'
        )}>
        <div
          onClick={() => currentTabState.setTabState('스크랩한 리뷰')}
          className={clsx(
            'cursor-pointer',
            currentTabState.tabState === '스크랩한 리뷰'
              ? 'font-bold'
              : 'text-text_light_grey'
          )}>
          스크랩한 리뷰(1)
        </div>
      </div>
    </div>
  );
}

export default ProfileTab;
