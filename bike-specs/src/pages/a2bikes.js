import Image from "next/image";
import "../styles/a2bikes.scss";
import BikeBox from "@/components/bikeBox";
const { MongoClient } = require("mongodb");


export async function getServerSideProps() {
    // Replace the uri string with your connection string.
    const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const database = client.db('test');
    const bikeDB = database.collection('models_images');
    const query = {Brand:"kawasaki" };
    const projection = {Images: 0 };
    const bikeList = await bikeDB.find(query).project(projection).limit(5).toArray();
    return {
        props: {
          bikeList: JSON.parse(JSON.stringify(bikeList)),
        },
      };
  } finally {
    await client.close();
  }
  
}


export default function A2Bikes (props) {
    //console.log(props.bikeList);

    return (
        <div className="a2bikes-page">
            <section className="a2bikes-about">
                <article>
                    <h3>What are A2 bikes?</h3>
                    <p>A2 bikes are all motorcycles that can be driven with A2 license. This means they need to have 35 kw or less, and maximum power to weight ration is 0.2 kw/kg.</p>
                    <p>It is possible to put a restrictor on more powerful bikes so that their max power output doesn’t cross 35 kw limit. In addition, no  motorcycle cannot output more than 70 kw out of the factory before restrictor.</p>
                </article>
                <aside>
                    <Image style={{objectFit:"cover"}}
                        src="/svartpilen_401.jpg"
                        alt="Svartpilen 401"
                        fill
                        sizes="100vw"
                        priority
                    />
                </aside>
            </section>
            <div className="bike-grid">
                {props.bikeList?.map((bike)=> <BikeBox 
                key={bike._id}
                id={bike._id}
                model={bike.Model} 
                type={bike.Category} 
                year={bike.Year}
                //image={bike.Images[0]}
                />)}
            </div>
        </div>
    );
}