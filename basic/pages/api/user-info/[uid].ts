import { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { uid } = req.query
  const cookies = req.cookies
  res.status(200).json({ name: `jintae123 ${uid} ${JSON.stringify(cookies)}` })
}
