import React from "react";
import IMG from "./assets/react.svg"
import './Cards.css'
function ProductCards()
{
    const data=[
        {
            ID:1,
            image: IMG,
            price: "$200",
            brand: "DENIM"
        },
        {
            ID:2,
            image: IMG,
            price: "$200",
            brand: "Ferrari"
        },
        {
            ID:3,
            image: IMG,
            price: "$200",
            brand: "POLOS"
        },
        {
            ID:4,
            image: IMG,
            price: "$5000",
            brand: "USPOLO"
        }
    ]
    return (
            <div className="parent">
                {
                    data.map((ele) => {
                        return(
                            <div className="card" onClick={window.location.href=`/Productinfo/${ele.ID}`}>
                        <div className="logo">
                            <img src={ele.image} />
                        </div>
                    <div className="info">
                            <div>Price: {ele.price}</div>
                            <div>Brand: {ele.brand}</div>
                    </div> 

                
                            </div>
                        )
                    })
                }
            </div>
        )
}
export default ProductCards;