import { connectToDatabase } from '@/util/mongodb';

export default async function (req, res) {
  const { db } = await connectToDatabase();

  const data = await db.collection('characters').find({}).toArray();

  res.json(data);
}
