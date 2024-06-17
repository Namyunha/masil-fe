import bcrypt from 'bcrypt';
import type { NextApiRequest, NextApiResponse } from 'next';
import { findUser, updateUser } from '@/utils/database';
import { refresh, sign } from '@/utils/jwtUtils';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  // mongoDB 연결
  switch (req.method) {
    case 'POST': {
      const { id, pw } = req.body;
      const result = await findUser(id);
      if (!result || !bcrypt.compareSync(pw, result.pw)) {
        res.status(405).json({ message: '존재하지 않는 계정입니다.' });
      } else {
        // 토큰 만들기
        const refreshToken = await refresh(id);
        const accessToken = await sign(id);
        // DB에 고유한 refreshToken 저장

        await updateUser({ id, data: refreshToken, key: 'refreshToken' });

        // Refresh Token은 쿠키에 담아 보내줌
        res.setHeader(
          'Set-Cookie',
          `refreshToken=${refreshToken}; Path=/; Expires=${new Date(
            Date.now() + 60 * 60 * 24 * 1000 * 3
          ).toUTCString()}; HttpOnly`
        );
        res.status(200).json({ message: '로그인 성공', id, accessToken });
      }
      break;
    }
    default:
      res.status(405).json({ message: '실행실패.' });
      break;
  }
}
