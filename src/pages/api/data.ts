import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  return new Promise(async (resolve, reject) => {
    if (_req.method === 'GET') {
      let response = await axios.get('https://api.refract.fi/data/aggregated/' + _req.query.id);
      res.status(200).json(response.data);
    }
  });
}
