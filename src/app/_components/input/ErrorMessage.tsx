import Icon from '@/components/Icon/Icon';

type ErrorMessageProps = {
  message?: string;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <p
      className="text-text_error flex items-center text-sm font-bold mt-1"
      role="alert">
      <Icon className="mr-1" name="circle_x" filter="RED" size={16} />
      {message}
    </p>
  );
}
