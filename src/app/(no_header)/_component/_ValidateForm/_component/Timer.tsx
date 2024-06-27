import React, { useEffect, useState } from 'react';
import { validateCondition } from '@/store/userStore';

export default function Timer() {
  const validateState = validateCondition();
  const [timeLeft, setTimeLeft] = useState(60); // 5분(300초) 초기값
  const random = (length = 6) => {
    return Math.random().toString(10).substr(2, length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          validateState.setValidateNum(random());
          return 60;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  // 남은 시간을 MM:SS 형식으로 변환
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  return (
    <span className="absolute top-2 right-5 z-dim font-semibold py-1 px-3 rounded bg-bg_disabled">
      {formatTime(timeLeft)}
    </span>
  );
}
