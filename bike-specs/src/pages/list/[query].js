"use client";

import "../../styles/list.scss";
import BikeBox from "@/components/bikeBox";
import { MongoClient } from "mongodb";

export async function getServerSideProps({ resolvedUrl }) {
  const startQuery = resolvedUrl.split("/")[2];
  console.log(startQuery);
  var query = {};
  if (startQuery == 0) {
    query = {};
  } else {
    console.log("nes vec");
  }

  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const database = client.db("test");
    const bikeDB = database.collection("models_images");
    const projection = {
      "Power (hp)": 0,
      Images: 0,
      Rating: 0,
      "Displacement (ccm)": 0,
      "Torque (Nm)": 0,
      "Engine cylinder": 0,
      "Engine stroke": 0,
      Gearbox: 0,
      "Bore (mm)": 0,
      "Stroke (mm)": 0,
      "Fuel capacity (lts)": 0,
      "Fuel system": 0,
      "Fuel control": 0,
      "Cooling system": 0,
      "Transmission type": 0,
      "Wheelbase (mm)": 0,
      "Seat height (mm)": 0,
      "Front brakes": 0,
      "Rear brakes": 0,
      "Front tire": 0,
      "Rear tire": 0,
      "Front suspension": 0,
      "Rear suspension": 0,
      "Color options": 0,
    };

    const bikeList = await bikeDB
      .find(query)
      .project(projection)
      .limit(64)
      .toArray();

    return {
      props: {
        bikeList: JSON.parse(JSON.stringify(bikeList)),
      },
    };
  } finally {
    await client.close();
  }
}

export default function BikeList(props) {
  return (
    <div className="bike-list-page">
      <div className="bike-grid">
        {props.bikeList?.map((bike) => (
          <BikeBox
            key={bike._id}
            id={bike._id}
            brand={bike.Brand}
            model={bike.Model}
            type={bike.Category}
            year={bike.Year}
          />
        ))}
      </div>
    </div>
  );
}
