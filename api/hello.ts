import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function (req: VercelRequest, res: VercelResponse) {
  const { name = 'World' } = req.query;

  res.status(200).json({ name, one: 'one' });
}
