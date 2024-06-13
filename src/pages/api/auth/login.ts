import bcrypt from 'bcrypt';
import type { NextApiRequest, NextApiResponse } from 'next';
import { findUser, updateUser } from '@/utils/database';
import { refresh, sign } from '@/utils/jwtUtils';

export default async function name(req: NextApiRequest, res: NextApiResponse) {
  // mongoDB 연결
  switch (req.method) {
    case 'POST':
      const { id, pw } = req.body;
      const result = await findUser(id);
      if (!result || !bcrypt.compareSync(pw, result.pw)) {
        res.status(405).json({ message: '존재하지 않는 계정입니다.' });
      }
      // 토큰만들기
      const refreshToken = await refresh(id);
      const accessToken = await sign(id);
      console.log('accessToken = ', accessToken);
      console.log('refreshToken = ', refreshToken);
      await updateUser(id, { refreshToken });
      res.status(200).json({ message: '로그인 성공' });
  }
}
