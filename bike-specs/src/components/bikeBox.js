import "./css/bikeBox.scss"
import Image from "next/image";
import Link from "next/link";

export default function BikeBox({
    image,
    model,
    type,
    year
}) {
    return (
        <Link href={"/"+model+year} className="bike-box">
            <div className="image-section">
                <Image style={{objectFit:"cover"}}
                    src={image}
                    alt={model+year}
                    fill
                    sizes="100vw"
                    priority
                />
            </div>
            <h3>{model}</h3>
            <div className="bike-type-year">
                <h4>{type}</h4>
                <h5>{year}</h5>
            </div>
        </Link>
    );
}