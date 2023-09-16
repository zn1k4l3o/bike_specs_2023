"use client"

import { usePathname } from "next/navigation";

function GetValue() {

    const pathname  = usePathname();
    const value = pathname.split('/')[2];

    return (
        <h1>{value}</h1>
    );
}


export default function BikeListFromValue () {
    return (
        <>
        <GetValue/>
        </>
    );
}