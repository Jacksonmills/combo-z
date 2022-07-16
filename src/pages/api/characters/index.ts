import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
import { Character } from '@/types';

export default async function (req: NextApiRequest,
  res: NextApiResponse<Character[]>) {
  try {
    const client = new clientPromise;
    const db = await client.db('comboz');
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
  } catch (err) {
    console.error(err);
    res.status;
  }
}
