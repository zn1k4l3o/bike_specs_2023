"use client"

import { usePathname } from "next/navigation";
import "../styles/bike.scss";


export default function BikePage() {

    const pathname  = usePathname();
    const value = pathname.split('/')[1];
    let year = value.slice(-4);
    let modelInfo =value.substring(0, value.length - 4).split("%20");
    

    return (
        <h1>{modelInfo}</h1>
    );
}