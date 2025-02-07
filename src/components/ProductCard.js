// import { productList } from "../utils/constant";
import { Product } from "./Product"; // Import the Product component
import { useState, useEffect } from "react";

export const ProductCard = () => {
    // Local state variable
    // const [listOfProduct, setListOfProduct] = useState(productList);  // Array destructuring  ho raha hai
    
    const [listOfProduct, setListOfProduct] = useState([]);

    useEffect(()=> {
        // console.log("useeffect called");

        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://fakestoreapi.com/products");
        // console.log(data);
        const resData = await data.json();
        console.log(resData);
        setListOfProduct(resData);
    }

    return (
        <div>
            <button
                onClick={() => {
                    const filteredProduct = listOfProduct.filter(product => product.rating.rate >= 4);
                    setListOfProduct(filteredProduct); // Update the state with the filtered products
                }}
                style={{ marginTop: "10px" }}
            >
                Top Rated Product
            </button>
            <div className="product_card">
                {listOfProduct.map((product) => {
                    return (
                        <Product key={product.id} product={product} />
                    );
                })}
            </div>
        </div>
    );
};
