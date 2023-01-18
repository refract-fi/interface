import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  return new Promise(async (resolve, reject) => {
    try {
      if (_req.method === 'POST') {
        let response = await axios.post(`https://api.refract.fi/job/create`, _req.body);
        res.status(200).json(response.data);
      } else if (_req.method === 'GET') {
        let response = await axios.get('https://api.refract.fi/job/check/' + _req.query.id);
        res.status(200).json(response.data);
      }
    } catch (e) {
      res.status(404).json(e);
      console.log(e);
    }
  });
}
