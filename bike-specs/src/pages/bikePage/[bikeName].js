"use client";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";
import Image from "next/image";
import "../../styles/bikePage.scss";
import InfoTable from "@/components/infoTable";

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

/*
Capitalize na imenu modela, ako ima vise od 3 slova u rijeci onda samo prvo slovo inace sve(uzeti u obzir brojeve)

Za brand treba proc kroz sve brendove u jsonu i zamijeniti sa inacicom iz csv liste brendova i staviti u bazu
*/

export default function BikePage(props) {
  
  if (props.bike===null || props.bike===undefined) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bike-info">
      <h1>
        {props.bike["Brand"].toUpperCase() +
          " " +
          props.bike["Model"].toUpperCase() +
          " " +
          props.bike["Year"]}
      </h1>
      <div className="photo-and-links">
        <aside>
          <Image
            style={{ objectFit: "cover" }}
            src={props.image}
            alt={
              props.bike["Brand"] +
              " " +
              props.bike["Model"] +
              " " +
              props.bike["Year"]
            }
            fill
            sizes="100vw"
            priority
          />
        </aside>
        <div>
          <a
            href={
              "https://www.google.com/search?q=" +
              props.bike["Brand"] +
              "+" +
              props.bike["Model"] +
              "+" +
              props.bike["Year"]
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Search bike model</button>
          </a>
          <a
            href={"https://www.google.com/search?q=" + props.bike["Brand"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Search manufacturer</button>
          </a>
        </div>
      </div>
      <InfoTable bike={props.bike} />
    </div>
  );
}
