import "./css/bikeBox.scss"
import Image from "next/image";

export default function BikeBox() {
    return (
        <article className="bike-box">
            <div className="image-section">
                <Image style={{objectFit:"cover"}}
                    src="/svartpilen_401.jpg"
                    alt="Svartpilen 401"
                    fill
                    sizes="100vw"
                    priority
                />
            </div>
            <h3></h3>
        </article>
    );
}