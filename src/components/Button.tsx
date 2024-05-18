'use client';

type ButtonProps = {
  // Todo: 디자인 나오면 재작업
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ ...props }: ButtonProps) {
  // Todo: 디자인 나오면 공통 컴포넌트로 재작업

  return <button {...props} className="w-80 mobile:w-48 bg-black text-white" />;
}
