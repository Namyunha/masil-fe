import { useState } from 'react';

export default function useCheck() {
  const [allCheck, setAllCheck] = useState(false);
  const [termsCheck, setTermsCheck] = useState(false);
  const [infoCollectCheck, setInfoCollectCheck] = useState(false);

  const setCheckType = {
    all: (boolean: boolean) => {
      setAllCheck(boolean);
      setTermsCheck(boolean);
      setInfoCollectCheck(boolean);
    },
    terms: (boolean: boolean) => setTermsCheck(boolean),
    infoCollect: (boolean: boolean) => setInfoCollectCheck(boolean),
    reset: () => {
      setAllCheck(false);
      setTermsCheck(false);
      setInfoCollectCheck(false);
    },
  };

  return {
    allCheck,
    termsCheck,
    infoCollectCheck,
    setCheckType,
  };
}
