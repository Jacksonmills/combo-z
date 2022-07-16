import clientPromise from '@/lib/mongodb';
import { ComboZCombo } from '@/types';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest,
  res: NextApiResponse<ComboZCombo[]>) {
  try {
    const client = new clientPromise;
    const db = await client.db('comboz');
    const collection = db.collection("combos");

    const getCombosByTag = async (tag: string, limit: number) => {
      const combos = await collection
        .find({ character: tag })
        .limit(limit)
        .toArray();

      res.json(combos);
    };

    const combos = await collection
      .find({})
      .toArray();

    res.json(combos);

    if (req.method === "POST") {
      const data = req.body;
      const result = await collection.insertOne(data);
      res.status(201).json(result);
    }
  } catch (err) {
    console.error(err);
    res.status;
  }
}

export const getCombosByTag = async (tag: string, limit: number,
  res: NextApiResponse<ComboZCombo[]>) => {
  const client = new clientPromise;
  const db = await client.db('comboz');
  const collection = db.collection("combos");

  const combos = await collection
    .find({ character: tag })
    .limit(limit)
    .toArray();

  res.json(combos);
};