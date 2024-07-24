import { toast } from 'react-toastify';
import Button from '@/components/Button/Button';
import ToastIcon from '../Icon/ToastIcon';

type ShareButtonProps = {
  size: 'xs' | 'l';
};

export default function ShareButton({ size }: ShareButtonProps) {
  const copyUrlHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    try {
      navigator.clipboard.writeText(window.location.href);

      toast('클립보드에 url이 복사되었습니다', {
        icon: ToastIcon({ type: 'success' }),
        className: 'border border-stroke_focused',
      });
    } catch (error) {
      toast('url 복사가 실패했습니다', {
        icon: ToastIcon({ type: 'error' }),
      });
    }
  };

  return (
    <Button
      variant="secondary"
      childrenType="iconOnly"
      iconName="share"
      size={size}
      className="p-0"
      onClick={copyUrlHandler}
    />
  );
}
