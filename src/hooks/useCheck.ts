import { useCallback, useState } from 'react';

type setCheckTypeProps = {
  checktype: string;
  boolean: boolean;
};

export default function useCheck() {
  const [check1, setCheck1] = useState<boolean>();
  const [check2, setCheck2] = useState<boolean>();
  const [check3, setCheck3] = useState<boolean>();

  const setCheckType = useCallback(
    (checktype: string, boolean: boolean) => {
      switch (checktype) {
        case 'check1':
          boolean ? setCheck1(true) : setCheck1(false);
          break;
        case 'check2':
          setCheck2(true);
          boolean ? setCheck2(true) : setCheck2(false);
          break;
        case 'check3':
          setCheck3(true);
          boolean ? setCheck3(true) : setCheck3(false);
          break;
        default:
          null;
      }
    },
    [check1, check2, check3]
  );

  return { check1, check2, check3, setCheckType };
}
