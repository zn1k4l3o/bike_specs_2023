import React, { useEffect, useState } from 'react';
import "./css/bikeBox.scss"
import Image from "next/image";
import Link from "next/link";

export default function BikeBox({
    id,
    model,
    type,
    year,
}) {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

      console.log('ID:', id); 

        const fetchItem = async () => {
            const response =await fetch(`/api/getImageById?itemId=${id}`);
            const data = await response.json();
            setItem(data);
            setLoading(false);
            ///console.log(data.Brand);
        };
    
        fetchItem();
        console.log(item);


      }, id);
    
      
    return (
      <>

      {!loading ?

        <Link href={"/"+model+year} className="bike-box">
          <div className="image-section">
              <Image style={{objectFit:"cover"}}
                  //src={item.Images[0]}
                  alt={model+year}
                  fill
                  sizes="100vw"
                  priority
              />
          </div>
          <h3>{model}</h3>
          <div className="bike-type-year">
              <h4>{type}</h4>
              <h5>{year}</h5>
          </div>
        </Link>

        :"Loading..."
      }
      </>
    );
}