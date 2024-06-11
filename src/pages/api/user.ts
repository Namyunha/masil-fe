import bcrypt from 'bcrypt';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { findUser, registerUser } from '@/utils/database';

type userdata = {
  _id: ObjectId;
  id: string;
  pw: string;
  nickName: string;
  email: string;
  fileName: string;
  currentMessage: string;
};

type ResponseData = {
  message: string;
  data?: userdata;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'GET') {
    const result = await findUser(req.query.email);
    console.log('result = ', result);
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
