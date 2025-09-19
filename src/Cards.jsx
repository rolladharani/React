        import React from 'react';
        import MyImage from "./assets/react.svg"
        import './Cards.css'
        const Cards = () => {
        var cards = [
            {
            image: MyImage,
            price: "$200",
            brand: "DENIM"
            },
            {
            image: MyImage,
            price: "$200",
            brand: "Ferrari"
            },
            {
            image: MyImage,
            price: "$200",
            brand: "POLOS"
            },
            {
                image: MyImage,
            price: "$5000",
            brand: "USPOLO"
            }
        ];

return (
            <div className="parent">
                {
                    cards.map((ele) => {
                        return(
                            <div className="card">
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

        export default Cards;