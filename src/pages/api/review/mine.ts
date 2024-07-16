import type { NextApiRequest, NextApiResponse } from 'next';
import { DEFAULT_CURSOR, DEFAULT_SIZE, SUCCESS_CODE } from '@/constants/api';
import { mockReviewList } from '@/mocks/data/reviewList';

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const {
    userId,
    pagingData: { lastPostId, pageSize },
  } = req.body;
  const cursor = lastPostId ?? DEFAULT_CURSOR;
  const size = pageSize ?? DEFAULT_SIZE;
  const myList = mockReviewList
    .filter((review) => review.userId === userId)
    .slice(cursor, cursor + size);

  const response = {
    status: SUCCESS_CODE.OK,
    message: '내가 쓴 리뷰 리스트 조회 성공',
    data: {
      reviews: myList,
      meta: {
        hasNext: myList.length <= DEFAULT_SIZE,
      },
    },
  };

  res.status(200).json(response);
}
