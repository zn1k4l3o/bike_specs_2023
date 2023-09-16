import ManufacturerLetter from "@/components/manufacturerLetter";
import manufacturerList from "./manufacturerList.json";
import "../styles/manufacturers.scss";
import Image from "next/image";

export default function Manufacturers() {
    return (
        <div className="manufacturer-page">
            <div className="manufacturer-grid">
                {manufacturerList.alfabet.map((a) => <ManufacturerLetter letter={a.letter} makeList={a.make.sort()}/>)}
            </div>
            <section className="manufacturer-about">
                <aside>
                    <Image style={{objectFit:"cover"}}
                        src="/bike_brands.jpg"
                        alt="Manufacturer Logos"
                        fill
                        sizes="100vw"
                        priority
                    />
                </aside>
                <article>
                    <h3>Why care about manufacturer?</h3>
                    <p>Different manufacturers usually value their customers differently. That’s why it’s important to carefully decide on make and model.</p>
                    <p>Some companies are known for quality made products and great reliability, while that isn’t true for others. That usually reflects in price.</p>
                    <p>Other thing to consider is how well-known company is, in case you need parts later on, or if you think of selling the bike later.</p>
                </article>
            </section>
        </div>
    );
}