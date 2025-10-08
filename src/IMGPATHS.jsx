import React,{useState} from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function IMGPATHS()
{
    const [ImagePath, setImagePath] = useState(null)
    const GetData =(event) =>{
        const file=event.target.files[0]
        const path=URL.createObjectURL(file)
        console.log(path)
        setImagePath(path)
    }
    return(
        <>
        <input type ="file" onChange={(event)=> GetData(event)} />
        {ImagePath ? <img className="myimage" src={ImagePath} alt="Image Cracked" /> : <p>No image uploaded</p>}
        


        </>
    )
}
export default IMGPATHS