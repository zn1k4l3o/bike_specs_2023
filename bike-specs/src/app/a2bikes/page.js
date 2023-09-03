import Image from "next/image";
import "./page.scss";

export default function A2Bikes () {
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
        </div>
    );
}