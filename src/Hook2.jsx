import React from "react";
import { useState,useEffect } from "react";
function Hook2 (){
    const [X,setX]=useState(0);
    useEffect(()=>{
        console.log("Executed...");
    },[X]);
    return(
        <>
        <button onClick={()=>{setX(X+1)}}>Click ME</button>

        </>

    );
}
export default Hook2;