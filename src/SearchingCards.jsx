import React from "react";
import { useState,useEffect } from "react";
import  "./SeachingCards.css"
function SearchingCards(){
        const [CompleteData,setCompleteData]=useState([
            {
                rollno:"23P31A0548"
            },
            {
                rollno:"23P31A0526"
            },
            {
                rollno:"23P31A0502"
            },
            {
                rollno:"23P31A0547"
            },
            {
                    rollno:"23P31A1228"
            },
            {
                    rollno:"23P31A1212"
            },
            {
                    rollno:"23P31A0564"
            },
            {
                    rollno:"23A91A0548"
            },
            {
                    rollno:"23P31A0509"
            }
        ])
        const [QueryResult,setQueryResult]=useState(CompleteData);

        const[userQuery,setUserQuery]=useState("");

        const capture=(event)=>{
            setUserQuery(event.target.value);
        }
        useEffect(()=>{
            if(userQuery === "")
            {
                setQueryResult(CompleteData);
            }
            else{
                const arr=CompleteData.filter((item)=>
                    item.rollno.toLowerCase().includes(userQuery.toLowerCase())
                );
                setQueryResult(arr);
            }
        }, [userQuery,CompleteData]); 
        return (
        <>
            <div className="parent">
                <input type="text" placeholder="Search..." onChange={capture}/>
            {QueryResult.map((ele,index) => (
                <div  key={index} className="card" >
                <h1>{ele.rollno}</h1>
                </div>
            ))}
            </div>
        </>
        );
    }
export default SearchingCards;




