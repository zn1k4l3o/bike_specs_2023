import "./css/categoryButton.scss"
import Link from "next/link";

export default function CategoryButton ({category}) {
    const value = category;
    return (
        <Link href={value} >
            <button className="category-button">{category}</button>
        </Link>
    );
}