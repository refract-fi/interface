import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.post(`https://api.refract.fi/wallet/validate`, _req.body);
      res.status(200).json(response.data);
    } catch (e) {
      res.status(404).json(e);
      console.log(e);
    }
  });
}
