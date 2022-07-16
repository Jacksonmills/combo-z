import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
import { ResponseFuncs } from '@/types';

const handler = async (req: NextApiRequest,
  res: NextApiResponse) => {
  const client = await clientPromise;
  const db = await client.db('comboz');
  const collection = db.collection("characters");

  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;
  const catcher = (error: Error) => res.status(400).json({ error });

  const handleCase: ResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const characters = await collection
        .find({})
        .toArray()
        .catch(catcher);

      res.json(characters);
    },
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const data = req.body;
      const result = await collection.insertOne(data).catch(catcher);
      res.json(result);
    },
  };

  const response = handleCase[method];
  if (response) {
    response(req, res);
  } else {
    res.status(400).json({ error: "No Response for This Request" });
  }
};

export default handler;
