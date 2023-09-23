import React, { useEffect, useState } from 'react';
import "./css/bikeBox.scss"
import Image from "next/image";
import Link from "next/link";

export default function BikeBox({
    id,
    brand,
    model,
    type,
    year,
    powerHP,
}) {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const fullName = brand.charAt(0).toUpperCase() + brand.slice(1) + " " + model;
    //console.log(fullName);
    useEffect(() => {

      //console.log('ID:', id); 

        const fetchItem = async () => {
            let response =await fetch(`/api/getImageById?itemId=${id}`);
            while (!response.ok) {
              response =await fetch(`/api/getImageById?itemId=${id}`);
            }
            const data = await response.json();
            setItem(data);
            setLoading(false);
            ///console.log(data.Brand);
        };
    
        fetchItem();


      }, [id]);
    
    return (
        <Link href={"/bikePage/"+id} className={powerHP > 46.9 ?"bike-box red":"bike-box"}>
          {powerHP > 46.9 ? <div className="restrictor-mark"></div> : <></>}
          <div className="image-section">
              <Image style={{objectFit:"cover"}}
                  src={!loading ? item.Images[0] : "/image_loading.png"}
                  alt={brand+" "+model+" "+year}
                  fill
                  sizes="100vw"
                  priority
              />
          </div>
          <h3>{fullName}</h3>
          <div className="bike-type-year">
              <h4>{type}</h4>
              <h5>{year}</h5>
          </div>
        </Link>
    );
}