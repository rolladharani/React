import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import IMG from "./assets/react.svg"
function Productinfo(){
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
    const ReceivedData= useParams();
    console.log(ReceivedData)
    const [myCard, setmycard]=useState(null)
    useEffect(() => {
        data.filter(ele => {
            if(ele.ID == parseInt(ReceivedData.ID)){
                setmyCard(ele);
            }
        })
    }, [])
if(!myCard){
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1>Name: ${myCard.name}</h1>
            <img src={IMG} alt={myCards.name} />
            <p>Description: ${myCards.desc}</p>
            <p>Price: ${myCards.price}</p>
        </div>
    );
}
export default Productinfo;