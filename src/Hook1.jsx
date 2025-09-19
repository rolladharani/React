import React from "react";
import { useState } from "react";
function Hook1(){
    const [X,setX]=useState(0);
    const [data,setdata]=useState(0);
    const change=()=>
    {
        if(X==true)
        {
            setX(false);
        }
        else{
            setX(true);
        }
    }
    const count=()=>
    {
            setdata(data+1);
    }
    return(
        <>
                <center>
                { X==true ? <h1>Hello</h1> : <h1>Bye</h1>}
                <button onClick={change}>Change State</button>
                
                <h1>Count : {data}</h1>
                <button onClick={count}>Click Me</button>
</center>
        </>
    )
}
export default Hook1;