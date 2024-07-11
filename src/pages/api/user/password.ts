import type { NextApiRequest, NextApiResponse } from 'next';
import { userData } from '@/types/user';

type ResponseData = {
  message: string;
  data?: userData;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'PATCH') {
    res.status(200).json({ message: '비밀번호 재설정 성공!', data: req.body });
  }
}
