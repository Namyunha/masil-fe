import { CheckForm } from './CheckForm';

export default function AgreementForm() {
  return (
    <div className="w-[20rem] h-72 absolute bottom-0 font-semibold z-20 bg-white">
      <div className="w-full h-full gap-5 flex flex-col justify-between box-border p-4">
        <div>서비스 이용 전 약관 동의가 필요해요</div>
        <CheckForm />
      </div>
    </div>
  );
}
