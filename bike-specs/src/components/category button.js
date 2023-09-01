import "./css/category button.scss"
import Link from "next/link";

export default function CategoryButton ({category}) {
    const value = "/list/" + category;
    return (
        <Link href={value} >
            <button className="category-button">{category}</button>
        </Link>
    );
}