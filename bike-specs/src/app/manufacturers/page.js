import ManufacturerLetter from "@/components/manufacturerLetter";
import manufacturerList from "./manufacturerList.json";
import "./page.scss"
export default function Manufacturers() {
    
    console.log(manufacturerList);
    return (
        <div className="manufacturer-grid">
            {manufacturerList.alfabet.map((a) => <ManufacturerLetter letter={a.letter} makeList={a.make.sort()}/>)}
        </div>
    );
}