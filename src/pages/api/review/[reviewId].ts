import { NextApiRequest, NextApiResponse } from 'next';
import { mockReviewDetail } from '@/mocks/data/reviewDetail';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(mockReviewDetail);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
