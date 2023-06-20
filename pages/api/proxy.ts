import axios, { AxiosError, AxiosResponse } from 'axios';
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
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        res.status(axiosError.response.status).json(axiosError.response.data);
      } else {
        res.status(500).json({ message: axiosError.message });
      }
    } else {
      res.status(500).json({ message: (error as Error).message });
    }
  }
};

export default handler;
