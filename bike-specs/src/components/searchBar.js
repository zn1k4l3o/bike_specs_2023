"use client"

import "./css/searchBar.scss"
import {useRouter} from "next/navigation"

export default function SearchBar () {
    const router = useRouter();
    
    function HandleEnter(value) {

        router.push("/list/"+value);
    }
    

    return (
        <>
        <input onKeyDown={(e)=> {
            if(e.key === "Enter") {
                HandleEnter(e.target.value);
            }
        }}
        className="search-bar"
        type="text"/>
        </>
    );
}