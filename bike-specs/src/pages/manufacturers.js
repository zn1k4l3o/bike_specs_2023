import ManufacturerLetter from "@/components/manufacturerLetter";
import "../styles/manufacturers.scss";
import Image from "next/image";
import { MongoClient } from "mongodb";

export async function getServerSideProps() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const database = client.db("test");
    const brandsDB = database.collection("brands");
    const projection = { _id: 0 };
    const brands = await brandsDB.find({}).project({ _id: 0 }).toArray();

    return {
      props: {
        brands: JSON.parse(JSON.stringify(brands)),
      },
    };
  } finally {
    await client.close();
  }
}

export default function Manufacturers(props) {
  var currLetter = props.brands[0].Brand.charAt(0).toUpperCase();
  var letters = {};
  letters[currLetter] = [];
  props.brands.forEach((brand) => {
    if (brand.Brand.charAt(0).toUpperCase() === currLetter)
      letters[currLetter].push(brand.Brand);
    else {
      currLetter = brand.Brand.charAt(0).toUpperCase();
      letters[currLetter] = [brand.Brand];
    }
  });

  return (
    <div className="manufacturer-page">
      <div className="manufacturer-grid">
        {Object.keys(letters).map((a) => (
          <ManufacturerLetter letter={a} makeList={letters[a].sort()} key={a} />
        ))}
      </div>
      <section className="manufacturer-about">
        <aside>
          <Image
            style={{ objectFit: "cover" }}
            src="/bike_brands.jpg"
            alt="Manufacturer Logos"
            fill
            sizes="100vw"
            priority
          />
        </aside>
        <article>
          <h3>Why care about manufacturer?</h3>
          <p>
            Different manufacturers usually value their customers differently.
            That’s why it’s important to carefully decide on make and model.
          </p>
          <p>
            Some companies are known for quality made products and great
            reliability, while that isn’t true for others. That usually reflects
            in price.
          </p>
          <p>
            Other thing to consider is how well-known company is, in case you
            need parts later on, or if you think of selling the bike later.
          </p>
        </article>
      </section>
    </div>
  );
}
