import React from "react";
import ReactDOM from "react-dom/client";
import Navbar  from "./components/Navbar";
import { ProductCard } from "./components/ProductCard";





const App=()=>{
    return ( 
        <div>
            <Navbar/>
            <ProductCard/>
        </div>
    );
};




const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
//REACT DOM se ek page se dosre page pe shift karte h karte h
//Suspense is a React component used to suspend the rendering process to perform some asynchronous 
// tasks like getting data from API or loading