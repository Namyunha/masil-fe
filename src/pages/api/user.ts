import bcrypt from 'bcrypt';
import type { NextApiRequest, NextApiResponse } from 'next';
import { dbUserData } from '@/types/user';
import { findUser, registerUser } from '@/utils/database';

type ResponseData = {
  message: string;
  data?: dbUserData;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'GET') {
    const searchUser = req.query.email as string;
    const result = (await findUser({
      searchData: searchUser,
      searchSource: 'email',
    })) as dbUserData;
    if (!result) {
      res
        .status(202)
        .json({ message: '존재하는 이메일이 없습니다.', data: result });
    }
    res
      .status(200)
      .json({ message: '이미 존재하는 이메일입니다.', data: result });
  }

  if (req.method === 'POST') {
    const hash = await bcrypt.hash(req.body.pw, 10);
    req.body.pw = hash;
    console.log('req = ', req.body);
    registerUser(req.body).catch(console.dir);
    res.status(200).json({ message: '회원가입 성공!' });
  }
}
