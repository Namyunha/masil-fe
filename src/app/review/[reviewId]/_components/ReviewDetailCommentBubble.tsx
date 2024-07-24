import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  useReviewCommentDeleteMutation,
  useReviewCommentUpdateMutation,
} from '@/api/review/queries';
import MoreModal from '@/components/Button/MoreModal';
import Icon from '@/components/Icon/Icon';
import ToastIcon from '@/components/Icon/ToastIcon';
import UserImage from '@/components/UserImage';
import { ReviewCommentType } from '@/types/review';
import { convertTime } from '@/utils/convertTime';

type ReviewDetailCommentBubbleProps = {
  reviewId: string;
  commentInfo: ReviewCommentType;
};

type InputType = {
  reviewId: string;
  comment: string;
  commentId: number;
};

export default function ReviewDetailCommentBubble({
  reviewId,
  commentInfo,
}: ReviewDetailCommentBubbleProps) {
  const { profileImageUrl, nickName, createdAt, comment, commentId } =
    commentInfo;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const { mutate: deleteMutate } = useReviewCommentDeleteMutation();
  const { mutate: updateMutate } = useReviewCommentUpdateMutation();
  const { register, handleSubmit } = useForm<InputType>();

  const submitHandler = (input: InputType) => {
    if (!input.comment.trim()) {
      toast('댓글을 입력해주세요.', {
        icon: ToastIcon({ type: 'error' }),
      });

      return;
    }

    updateMutate({
      reviewId,
      comment: input.comment,
      commentId,
    });

    setIsUpdating(false);
  };

  const deleteHandler = () => {
    deleteMutate({
      reviewId,
      commentId,
    });
  };

  // Todo: 본인의 댓글만 수정 & 삭제할 수 있도록 수정
  return (
    <>
      <li className="flex items-center justify-between px-16 py-12 rounded-full rounded-bl-none shadow-elevation2">
        <div className="flex items-center gap-16 w-[90%]">
          <UserImage src={profileImageUrl} />
          <div className="flex flex-col items-start gap-[6px] w-[90%]">
            <div className="flex gap-8 w-[90%]">
              <div className="font-bold text-14">{nickName}</div>
              <div className="text-text_light_grey text-12">
                {convertTime(createdAt)}
              </div>
            </div>

            {isUpdating ? (
              <form onSubmit={handleSubmit(submitHandler)} className="w-full">
                <input
                  type="text"
                  className="flex-grow text-left text-12 px-[4px] border border-stroke_grey rounded-md w-[90%]"
                  placeholder="댓글을 입력해주세요."
                  {...register('comment')}
                  defaultValue={comment}
                />
              </form>
            ) : (
              <p className="flex-grow text-left text-12">{comment}</p>
            )}
          </div>
        </div>
        {isUpdating ? (
          <div className="flex flex-col gap-[2px]">
            <button className="p-[4px]" onClick={() => setIsUpdating(false)}>
              <Icon name="close" size={16} filter="RED" />
            </button>
            <button className="p-[4px]" onClick={handleSubmit(submitHandler)}>
              <Icon name="send" size={16} />
            </button>
          </div>
        ) : (
          <button className="p-[4px]" onClick={() => setIsModalOpen(true)}>
            <Icon name="more" size={16} />
          </button>
        )}
      </li>
      <MoreModal
        isOpen={isModalOpen}
        closeHandler={() => setIsModalOpen(false)}
        deleteHandler={deleteHandler}
        updateHandler={() => setIsUpdating(true)}
      />
    </>
  );
}
