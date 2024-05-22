import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function useResponsive() {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileScreen = useMediaQuery({ maxWidth: 480 });

  useEffect(() => {
    if (isMobileScreen) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isMobileScreen]);

  return isMobile;
}
