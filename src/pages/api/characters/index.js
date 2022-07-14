import { connectToDatabase } from '@/util/mongodb';

export default async function (req, res) {
  const { db } = await connectToDatabase();

  const characters = await db
    .collection('characters')
    .find({})
    .limit(20)
    .toArray();

  res.json(characters);
}
