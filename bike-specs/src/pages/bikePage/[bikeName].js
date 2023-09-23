"use client";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

export async function getServerSideProps({ resolvedUrl }) {
  const client = new MongoClient(process.env.MONGODB_URI);
  const id = resolvedUrl.split("/")[2];

  try {
    await client.connect();
    const database = client.db("test");
    const bikeDB = database.collection("models_images");
    const projection = { _id: 0 };
    const bike = await bikeDB.findOne(
      { _id: new ObjectId(id) },
      { projection: projection }
    );

    return {
      props: {
        bike: JSON.parse(JSON.stringify(bike)),
      },
    };
  } finally {
    await client.close();
  }
}

export default function BikeListFromValue(bike) {
  console.log(bike);
  return (
    <div className="bike-info">
        doraditi
    </div>
  );
}
