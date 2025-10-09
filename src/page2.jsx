import React from 'react'
import Store from './Store'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
const page2 = () => {
        var {Count,setCount} = useContext(Store);
        return (
        <div>
            <center>
            <button 
                onClick={()=>setCount(Count+1)}
            >
                Add
            </button>
            <h1>Count : {Count}</h1>
            <h1>Page-2</h1>
            <Link to="/">Move to Page-1</Link>
            </center>
        </div>
        )
}

export default page2
