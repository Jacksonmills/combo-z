import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/util/mongodb';
import { Character } from '@/util/types';

export default async function (req: NextApiRequest,
  res: NextApiResponse<Character[]>) {
  const { db } = await connectToDatabase();
  const collection = db.collection("characters");

  if (req.method === "GET") {
    const characters = await collection
      .find({})
      .toArray();

    res.json(characters);
  }

  if (req.method === "POST") {
    const data = req.body;
    const result = await collection.insertMany(data);
    res.status(201).json(result);
  }
}
