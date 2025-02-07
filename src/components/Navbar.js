import {useState} from "react";

const navbar = () => {
    //let btnName = "Light"; // Normal Java Script variable

    const [btnName,setBtnName] = useState("Light");

    return (
        <div className="navbar" >
            <h1>LOGO</h1>
            <ul className="menu_items">
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
                <li>CART</li>
                <li>Logout</li>
                <button onClick={()=>   {
                    // btnName = "Dark";
                    // console.log(btnName);

                    btnName === "Light" ? setBtnName("Dark") : setBtnName("Light");  // btnName = "Dark";
                }}>{btnName}</button>
            </ul>
            
        </div>
    );
};

export default navbar