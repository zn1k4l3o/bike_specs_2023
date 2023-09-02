"use client"

import Image from "next/image";
import Link from "next/link";
import "./css/navbar.scss";
import { usePathname } from "next/navigation";


export default function Navbar() {

    let pathname = usePathname();
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
                        <Link href="/" className={pathname === "/" ? "chosen-link" : "waiting-link"}>HOME</Link>
                    </li>
                    <li>
                        <Link href="/a2bikes" className={pathname === "/a2bikes" ? "chosen-link" : "waiting-link"}>A2 BIKES</Link>
                    </li>
                    <li>
                        <Link href="/manufacturers" className={pathname == "/manufacturers" ? "chosen-link" : "waiting-link"}>MANUFACTURERS</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}