import { useCallback, useState } from 'react';

export default function useHover() {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  return { handleMouseEnter, handleMouseLeave, isHover };
}
