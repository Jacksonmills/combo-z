import { connectToDatabase } from '@/util/mongodb';

export default async function (req, res) {
  const { db } = await connectToDatabase();
  const collection = db.collection("characters");

  if (req.method === "GET") {
    const characters = await collection
      .find({})
      .limit(20)
      .toArray();

    res.json(characters);
  }

  if (req.method === "POST") {
    const data = req.body;
    const result = await collection.insertMany(data);
    res.status(201).json({ message: "Data inserted successfully!" });
  }
}
