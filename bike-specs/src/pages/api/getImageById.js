const { MongoClient,ObjectId  } = require("mongodb");

/*
export default async function handler(req, res) {
  const { itemId } = req.query;
  console.log(itemId);

  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    const database = client.db('test');
    const collection = database.collection('models_images');

    const item = await collection.find({ _id: new ObjectId(itemId) });

    console.log(item);


    if (!item) {
      throw new Error('Item not found');
    }

    return res.json(item);
  } finally {
    await client.close();
  }
}
*/

export default async function handler(req, res) {
  const { itemId } = req.query;
  //console.log('Request received for itemId:', itemId);

  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB.');

    const database = client.db('test');
    const collection = database.collection('models_images');

    const item = await collection.findOne({ _id: new ObjectId(itemId) });

    if (!item) {
      console.log('Item not found');
      res.status(404).json({ error: 'Item not found' });
    }

    //console.log('Item found:', item);
    res.json(item);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
    console.log('MongoDB connection closed.');
  }
}