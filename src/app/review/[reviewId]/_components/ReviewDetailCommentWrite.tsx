import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useReviewCommentWriteMutation } from '@/api/review/queries';
import Icon from '@/components/Icon/Icon';
import ToastIcon from '@/components/Icon/ToastIcon';
import UserImage from '@/components/UserImage';

type ReviewDetailCommentWritePRops = {
  reviewId: string;
};

type InputType = {
  comment: string;
};

export default function ReviewDetailCommentWrite({
  reviewId,
}: ReviewDetailCommentWritePRops) {
  const { register, handleSubmit, reset } = useForm<InputType>();
  const { mutate } = useReviewCommentWriteMutation();

  const submitHandler = (input: InputType) => {
    if (!input.comment.trim()) {
      toast('댓글을 입력해주세요.', {
        icon: ToastIcon({ type: 'error' }),
      });
      return;
    }

    mutate({
      reviewId,
      comment: input.comment,
    });
    reset();
  };

  // Todo: 회원 정보로 수정
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <li className="flex items-center justify-between px-16 py-12 rounded-full rounded-bl-none shadow-elevation2">
        <div className="flex items-center gap-16 w-[90%]">
          <UserImage src="/image/profile_image.png" />
          <div className="flex flex-col items-start gap-[6px] w-[90%]">
            <div className="flex gap-8">
              <div className="font-bold text-14">유저1</div>
            </div>

            <input
              {...register('comment')}
              placeholder="댓글을 입력해주세요."
              type="text"
              className="flex-grow text-left text-12 w-[90%]"
            />
          </div>
        </div>

        <button
          className="p-8 rounded-full"
          onClick={handleSubmit(submitHandler)}>
          <Icon name="send" size={16} />
        </button>
      </li>
    </form>
  );
}
