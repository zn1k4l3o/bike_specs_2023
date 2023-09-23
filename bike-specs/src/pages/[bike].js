"use client";

import { usePathname } from "next/navigation";
import "../styles/bike.scss";

export default function BikePage() {
  const pathname = usePathname();

  return <h1>{pathname}</h1>;
}
