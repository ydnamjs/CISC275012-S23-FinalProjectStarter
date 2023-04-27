/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import "./Product.css";
import "./Main.css";

interface ProductProps {
    name: string;
    price: number;
    description: string;
    sizes: string[];
    picture: string;
}

const Product: React.FC<ProductProps> = ({
    name,
    price,
    description,
    sizes,
    picture
}) => {
    return (
        <div className="productImage">
            <img src={require(`../assets/${picture}.png`)} alt={description} />
            <h2 className="productName">{name}</h2>
            <p className="productDesc">{description}</p>
            <p className="productPrice">Price: ${price}</p>
            <div className="productSize"></div>
        </div>
    );
};
// to display a single product --> <Product {...product1} />
export default Product;
