import axios, { AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response: AxiosResponse = await axios({
      method: req.method,
      url: 'https://paymagicapi.com/v1/resolver',
      data: req.body,
      headers: {
        'Content-Type': 'text/plain',
      },
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

export default handler;
