'use client';

type ButtonProps = {
  value: string;
  onClick: () => void;
};

export default function Button({ value, onClick }: ButtonProps) {
  // Todo: 디자인 나오면 공통 컴포넌트로 재작업

  return (
    <button className="w-80 mobile:w-48 bg-black text-white" onClick={onClick}>
      {value}
    </button>
  );
}
