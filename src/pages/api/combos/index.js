import { connectToDatabase } from '@/util/mongodb';

export default async function (req, res) {
  const { db } = await connectToDatabase();

  const combos = await db
    .collection('combos')
    .find({})
    .limit(20)
    .toArray();

  res.json(combos);
}
