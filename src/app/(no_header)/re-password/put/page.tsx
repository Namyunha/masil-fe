import SignHeader from '@/app/_components/sign/Header';
import PutPasswordForm from '../../_component/_RePasswordForm/_component/PutPasswordForm';
import BackBtnHead from '../../_component/BackBtnHead';

export default function page() {
  return (
    <>
      <BackBtnHead />
      <SignHeader>
        새로운 비밀번호를
        <br />
        입력해주세요.
      </SignHeader>
      <PutPasswordForm />
    </>
  );
}
