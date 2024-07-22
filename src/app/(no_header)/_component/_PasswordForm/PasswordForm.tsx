import { SubmitHandler, useForm } from 'react-hook-form';
import ActiveButton from '@/app/_components/ActiveButton';
import LabelInput from '@/app/_components/input/LabelInput';
import SignHeader from '@/app/_components/sign/Header';
import { pwInputValidate } from '@/constants/form';
import { pw_regex } from '@/constants/validates';
import { progressCondition, userRegisterStore } from '@/store/userStore';
import { formInputs } from '@/types/user/form';

export default function PasswordForm() {
  const currentUserInfo = userRegisterStore();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formInputs>();
  const progressStatus = progressCondition();
  const onsubmitHandler: SubmitHandler<formInputs> = async (data) => {
    currentUserInfo.setPw(data.pw);
    progressStatus.setProgressCondition(4);
  };

  const errorCondition = pw_regex.value.test(watch('pw'));

  return (
    <div className="flex flex-col">
      <SignHeader>
        로그인에 사용할 <br />
        비밀번호를 입력해주세요
      </SignHeader>
      <form onSubmit={handleSubmit(onsubmitHandler)} className="flex flex-col">
        <LabelInput
          type={'password'}
          inputValue={currentUserInfo.pw}
          register={register}
          isDisabled={false}
          inputValidate={pwInputValidate}
          errorMessage={errors.pw?.message}
          className={'mt-9'}
        />
        <ActiveButton activeClassName="mt-9" errorState={!errorCondition}>
          다음
        </ActiveButton>
      </form>
    </div>
  );
}
