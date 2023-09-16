/*
import clientPromise from '@/mongodb/mongodbInit'

export async function GetBikes() {
  try {
      const client = await clientPromise;
      const db = client.db("test");

      const bikes = await db
          .collection("models_images")
          .find({})
          .limit(2)
          .toArray();

      console.log(bikes);
      return bikes;
  } catch (e) {
      console.error(e);
  }
};

*/


const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const client = new MongoClient(process.env.MONGODB_URI);
export async function GetBikes() {
  try {
    console.log(process.env.MONGODB_URI);
    const database = client.db('test');
    const bikeDB = database.collection('models_images');
    // Query for a movie that has the title 'Back to the Future'
    const query = { Make:"Kawasaki" };
    const bikes = await bikeDB.find(query);
    console.log(bikes);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
