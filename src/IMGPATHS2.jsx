import React,{useState} from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function IMGPATHS2()
{
    const [ImagePath, setImagePath] = useState(null)
    const GetData =(event) =>{
        const file=event.target.files[0]
        const reader= new FileReader()
        reader.readAsDataURL(file)
        reader.onload=()=>{
        setImagePath(reader.result)
        console.log(reader.result)
        }
        
    }
    return(
        <>
        <input type ="file" onChange={(event)=> GetData(event)} />
        {ImagePath ? <img className="myimage" src={ImagePath} alt="Image Cracked" /> :  alert("Please upload a valid image file.")}

        </>
    )
}
export default IMGPATHS2