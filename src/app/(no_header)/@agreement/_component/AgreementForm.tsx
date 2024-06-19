import Icon from '@/components/Icon';
import { useModalStore } from '@/store/userStore';
import { CheckForm } from './CheckForm';

export default function AgreementForm() {
  const { changeStatus } = useModalStore();
  return (
    <div className="w-dvw animate-agreement_modal absolute font-semibold z-20 rounded-t-3xl bg-white">
      <div className="w-full h-72 gap-5 flex flex-col justify-between box-border p-4">
        <div className="flex justify-end">
          <span onClick={() => changeStatus()}>
            <Icon
              className="cursor-pointer opacity-50"
              name="close"
              size={24}
            />
          </span>
        </div>
        <div className="w-full text-center font-bold">
          서비스 이용 전 약관 동의가 필요해요
        </div>
        <CheckForm />
      </div>
    </div>
  );
}
