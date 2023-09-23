import Link from "next/link";
import "./css/manufacturerLetter.scss";

export default function ManufacturerLetter({ letter, makeList }) {
  return (
    <div className="letter-box">
      <h2>{letter}</h2>
      {makeList.map((make) => (
        <Link href={"/list/" + make} className="make-links">
          {make}
        </Link>
      ))}
    </div>
  );
}
