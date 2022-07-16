import { connectToDatabase } from '@/util/mongodb';
import { _Combo } from '@/util/types';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest,
  res: NextApiResponse<_Combo[]>) {
  const { db } = await connectToDatabase();
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
}

export const getCombosByTag = async (tag: string, limit: number,
  res: NextApiResponse<_Combo[]>) => {
  const { db } = await connectToDatabase();
  const collection = db.collection("combos");

  const combos = await collection
    .find({ character: tag })
    .limit(limit)
    .toArray();

  res.json(combos);
};