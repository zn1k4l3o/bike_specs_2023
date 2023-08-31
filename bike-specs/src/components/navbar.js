import Image from "next/image";
import Link from "next/link";
import "./css/navbar.scss";

export default function Navbar() {
    return (
        <header className="navbar">
            <div>
                <Link href="/" className="logo">
                    <Image
                    //className={logo}
                    src="/logo_bike_specs.svg"
                    alt="Bike Specs Logo"
                    width={300}
                    height={58}
                    priority
                    />
                </Link>
                <ul>
                    <li>
                        <Link href="/">HOME</Link>
                    </li>
                    <li>
                        <Link href="/a2bikes">A2 BIKES</Link>
                    </li>
                    <li>
                        <Link href="/manufacturers">MANUFACTURERS</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}