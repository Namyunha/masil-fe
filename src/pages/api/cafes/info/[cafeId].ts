import { NextApiRequest, NextApiResponse } from 'next';
import { mockCafeDetail } from '@/mocks/data/cafeDetail';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(mockCafeDetail);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
