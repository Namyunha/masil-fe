import type { NextApiRequest, NextApiResponse } from 'next';
import { findUser } from '@/utils/database';
import { sign } from '@/utils/jwtUtils';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST': {
      const { email, pw } = req.body;
      const result = await findUser({
        searchData: email,
        searchSource: 'email',
      });
      if (!result || !(pw === result.pw)) {
        res.status(405).json({
          status: 405,
          message: '이메일 또는 비밀번호를 확인해주세요',
        });
      } else {
        // 토큰 만들기
        const accessToken = await sign(email);
        res.status(200).json({ message: '로그인 성공', email, accessToken });
      }
      break;
    }
    default:
      res.status(405).json({ message: '실행실패.' });
      break;
  }
}
