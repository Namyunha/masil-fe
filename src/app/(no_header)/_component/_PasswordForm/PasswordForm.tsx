import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { pw_regex } from '@/constants/validates';
import { progressCondition, useRegisterStore } from '@/store/userStore';
import ErrorMessage from '../ErrorMessage';
import Label from '../Label';
import PassButton from '../PassButton';

type Inputs = {
  password: string;
};

export default function PasswordForm() {
  const [errorState, setErrorState] = useState(true);
  const currentUserInfo = useRegisterStore();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const progressStatus = progressCondition();

  const onsubmitHandler: SubmitHandler<Inputs> = async (data) => {
    currentUserInfo.setUserInfo({ pw: data.password, nickName: '' });
    progressStatus.setProgressCondition(4);
  };

  useEffect(() => {
    pw_regex.value.test(watch('password'))
      ? setErrorState(false)
      : setErrorState(true);
  }, [watch('password')]);

  return (
    <div className="flex flex-col mt-56">
      <div className="text-20">
        <p className="font-bold">
          로그인에 사용할 <br />
          비밀번호를 입력해주세요
        </p>
      </div>
      <form onSubmit={handleSubmit(onsubmitHandler)} className="flex flex-col">
        <div className="relative my-9">
          <input
            {...register('password', {
              required: '비밀번호를 입력해주세요',
              pattern: {
                value: pw_regex.value,
                message: pw_regex.message,
              },
            })}
            id="small_filled"
            placeholder=""
            className={clsx(
              'peer block rounded-lg px-12 pt-4 pb-8 w-full border-2 focus:outline-none',
              errors.password &&
                'bg-fields_bg_error border border-fields_stroke_error'
            )}
            type="password"
          />
          <Label labelName="영문,숫자,특수기호 포함 5~20자" />
          {errors.password && (
            <ErrorMessage message={errors.password.message} />
          )}
        </div>
        <PassButton errorState={errorState}>{'다음'}</PassButton>
      </form>
    </div>
  );
}
