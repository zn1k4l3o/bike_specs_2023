import Link from "next/link";
import "./page.scss";
import SearchBar from "@/components/searchBar";
import CategoryButton from "@/components/categoryButton";
import Image from "next/image";
import LinkBox from "@/components/homeLinkBox";

const categoryList = [
  "Adventure",
  "Off-Road",
  "Sport",
  "Touring",
  "A2 Bikes",
  "Dual-Sport",
  "Cafe Racer",
  "Scooter",
];

const linkBoxes = [
  {
    title: "Power and engine layout",
    text: "Find out differences about engine layouts,  power output, peak torque and how they affect riding. Its one of the most important subjects when picking a motorcycle.",
    url: "https://www.youtube.com/watch?v=aOTz0Ol8fLA",
  },
  {
    title: "Weight and shape",
    text: "Different bikes can vary a lot in weight. It all depends on intended use and biker must carefully explore various options available on the market before buy.",
    url: "https://www.youtube.com/watch?v=jnlOxkyyAZU",
  },
  {
    title: "Equipment and safety precautions",
    text: "While bikes are generally safe, they can become dangerous if not driven carefully or in the wrong circumstances. In those cases, its best to have full equipment.",
    url: "https://www.youtube.com/watch?v=prnfQSGc4C0",
    index: 3,
  },
];

export default function Home() {
  return (
    <div className="home">
      <div className="background-photo">
        <section>
          <h1>Bike Specs</h1>
          <h2>
            Welcome to Bike Specs, a site dedicated to providing information on
            specifications of bikes from variety of manufacturers.
          </h2>
          <Link href="/list/0">
            <button>View All</button>
          </Link>
        </section>
      </div>
      <div className="search-home">
        <h2>Search bike by name:</h2>
        <SearchBar />
      </div>
      <div className="category-pick-home">
        <h2>Categories</h2>
        <section className="category-grid">
          {categoryList.map((value) => (
            <CategoryButton category={value} />
          ))}
        </section>
      </div>
      <div className="about-bikes">
        <aside>
          <Image
            style={{ objectFit: "cover" }}
            src="/home_tenere.jpg"
            alt="Super Tenere 750"
            fill
            sizes="100vw"
            priority
          />
        </aside>
        <article>
          <h3>About Bike Specs</h3>
          <p>
            On Bike Specs you can find bunch of information on specifications of
            bikes from various manufacturers.
          </p>
          <p>
            Below you can find links to sites talking about what to look out for
            when buying a bike.
          </p>
        </article>
      </div>
      <div className="links-home">
        {linkBoxes.map((box) => (
          <LinkBox
            title={box.title}
            text={box.text}
            url={box.url}
            index={box.index}
          />
        ))}
      </div>
    </div>
  );
}
