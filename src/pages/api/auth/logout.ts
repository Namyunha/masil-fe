import type { NextApiRequest, NextApiResponse } from 'next';

export default async function name(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      try {
        const { refreshToken } = req.cookies;
        console.log('refreshToken = ', refreshToken);
        // 만료 시간을 현재 시간보다 빠르게 해서 만료되도록 하여 쿠키 삭제
        // HttpOnly라 브라우저에서 임의로 쿠키 조작 불가 -> 서버에서 설정
        res.setHeader(
          'Set-Cookie',
          `refreshToken=; Path=/; Expires=${new Date(
            Date.now() - 1
          ).toUTCString()}; HttpOnly`
        );
        if (refreshToken) {
          return res.status(200).json({ message: '로그아웃 완료!' });
        }
        return res.send('이미 로그아웃 되었습니다.');
      } catch (error) {
        res.statusCode = 405;
        return res.send(error);
      }
  }
}
