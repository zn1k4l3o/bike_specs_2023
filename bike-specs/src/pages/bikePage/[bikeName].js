"use client";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";
import Image from "next/image";
import "../../styles/bikePage.scss";

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

    const image = bike["Images"][0];
    delete bike["Images"];

    return {
      props: {
        bike: JSON.parse(JSON.stringify(bike)),
        image: image,
      },
    };
  } finally {
    await client.close();
  }
}

export default function BikeListFromValue(props) {
  console.log(props.image);
  return (
    <div className="bike-info">
      <section>
        <Image
          style={{ objectFit: "cover" }}
          src={props.image}
          alt={props.bike["Brand"] + " " + props.bike["Model"] + " " + props.bike["Year"]}
          fill
          sizes="100vw"
          priority
        />
      </section>


    </div>
  );
}
