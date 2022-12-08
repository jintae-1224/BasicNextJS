import { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { uid } = req.query
  res.status(200).json({ name: `jintae123 ${uid}` })
}
