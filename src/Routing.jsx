import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClassComponent from "./ClassComponent";
import Component1 from "./Component1";
import Component2 from "./Component2";
import PageNotFound from "./PageNotFound";

const Routing = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <ClassComponent />} />
            <Route path="/Comp1" element={<Component1 />} /> 
            <Route path="/Comp2" element={<Component2 />} /> 
            <Route path="*" element={<PageNotFound />} /> 
        </Routes>
        </BrowserRouter>
    );
    };
    export default Routing;