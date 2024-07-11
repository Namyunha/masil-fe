import type { NextApiRequest, NextApiResponse } from 'next';
import { userData } from '@/types/user';
import { findUser, registerUser } from '@/utils/database';

type ResponseData = {
  message: string;
  data?: userData;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'GET') {
    let searchUser = '';
    let searchSource = '';
    let name = '';

    if (req.query.email) {
      searchUser = req.query.email as string;
      searchSource = 'email';
      name = '이메일';
    } else if (req.query.nickName) {
      searchUser = req.query.nickName as string;
      searchSource = 'nickName';
      name = '닉네임';
    }
    console.log('searchUser = ', searchUser);
    console.log('searchSource = ', searchSource);

    const result = await findUser({
      searchData: searchUser,
      searchSource: searchSource,
    });

    if (!result) {
      res
        .status(202)
        .json({ message: `존재하는 ${name}이 없습니다.`, data: result });
    }
    res
      .status(200)
      .json({ message: `이미 사용중인 ${name}입니다.`, data: result });
  }

  if (req.method === 'POST') {
    await registerUser(req.body);
    res.status(200).json({ message: '회원가입 성공!' });
  }
}
