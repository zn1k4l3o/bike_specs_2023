import Image from "next/image";
import "../styles/a2bikes.scss";
import BikeBox from "@/components/bikeBox";
const { MongoClient } = require("mongodb");

function bikeRatioCheck(bikes) {
  var numOfBad = 0;
  bikes.forEach((bike) => {
    const ratio = bike["Power (hp)"] / bike["Dry weight (kg)"];
    if (ratio > 0.2) {
      numOfBad += 1;
    }
  });

  return numOfBad;
}

export async function getServerSideProps() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const database = client.db("test");
    const bikeDB = database.collection("models_images");
    const query = { "Power (hp)": { $lte: 93.88 }, "Year" : {$gte : 1985}};
    const projection = {
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

export default function A2Bikes(props) {
  return (
    <div className="a2bikes-page">
      <section className="a2bikes-about">
        <article>
          <h3>What are A2 bikes?</h3>
          <p>
            A2 bikes are all motorcycles that can be driven with A2 license.
            This means they need to have 35 kw or less, and maximum power to
            weight ration is 0.2 kw/kg.
          </p>
          <p>
            It is possible to put a restrictor on more powerful bikes so that
            their max power output doesn’t cross 35 kw limit. In addition, no
            motorcycle cannot output more than 70 kw out of the factory before
            restrictor.
          </p>
        </article>
        <aside>
          <Image
            style={{ objectFit: "cover" }}
            src="/svartpilen_401.jpg"
            alt="Svartpilen 401"
            fill
            sizes="100vw"
            priority
          />
        </aside>
      </section>
      <div className="restricted-text">
        <h2>List of bikes that can be driven on A2</h2>
        <p>
          *Bikes that need restrictor are marked <b>red</b>
        </p>
      </div>
      <div className="bike-grid">
        {props.bikeList?.map((bike) => (
          <BikeBox
            key={bike._id}
            id={bike._id}
            brand={bike.Brand}
            model={bike.Model}
            type={bike.Category}
            year={bike.Year}
            powerHP={bike["Power (hp)"]}
          />
        ))}
      </div>
    </div>
  );
}
