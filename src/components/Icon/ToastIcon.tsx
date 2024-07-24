import Icon from './Icon';

type ToastIconProps = { type: 'success' | 'error' };

export default function ToastIcon({ type }: ToastIconProps) {
  return <Icon name={type} size={16} />;
}
