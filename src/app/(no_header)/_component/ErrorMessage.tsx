import { ReactNode } from 'react';
import Icon from '@/components/Icon';

type ErrorMessageProps = {
  message: ReactNode;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <p
      className="text-text_error flex items-center text-sm font-bold mt-1"
      role="alert">
      <Icon className="mr-1" name="circle_x" filter="RED" size={20} />
      {message}
    </p>
  );
}
