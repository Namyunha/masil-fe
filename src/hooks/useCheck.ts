import { useCallback, useState } from 'react';

export default function useCheck() {
  const [check1, setCheck1] = useState<boolean>();
  const [check2, setCheck2] = useState<boolean>();
  const [check3, setCheck3] = useState<boolean>();

  const setCheckType = useCallback(
    (checktype: string, boolean?: boolean) => {
      switch (checktype) {
        case 'check1':
          boolean ? setCheck1(true) : setCheck1(false);
          break;
        case 'check2':
          boolean ? setCheck2(true) : setCheck2(false);
          break;
        case 'check3':
          boolean ? setCheck3(true) : setCheck3(false);
          break;
        case 'reset':
          setCheck1(undefined);
          setCheck2(undefined);
          setCheck3(undefined);
          break;
        default:
          null;
      }
    },
    [check1, check2, check3]
  );

  return { check1, check2, check3, setCheckType };
}
