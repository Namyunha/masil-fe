import bcrypt from 'bcrypt';
import type { NextApiRequest, NextApiResponse } from 'next';
import { registerUser } from '@/utils/database';

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    const hash = await bcrypt.hash(req.body.pw, 10);
    req.body.pw = hash;
    console.log('req = ', req.body);
    registerUser(req.body);
    res.status(200).json({ message: 'Hello from Next.js!' });
  }
}
