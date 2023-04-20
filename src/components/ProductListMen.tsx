import React from "react";
import Product from "./Product";
import "./ProductListMen.css";

const products = [
    {
        name: "Product 1",
        price: 10,
        description: "Lorem ipsum dolor sit amet.",
        sizes: ["Small", "Medium", "Large"],
        picture: "ud_shirt"
    },
    {
        name: "Product 2",
        price: 20,
        description: "Consectetur adipiscing elit.",
        sizes: ["Small", "Large"],
        picture: "ud_shirt"
    },
    {
        name: "Product 3",
        price: 30,
        description: "Nullam accumsan cursus semper.",
        sizes: ["Medium"],
        picture: "ud_shirt"
    }
];

const ProductList = () => {
    return (
        <div className="productList">
            {products.map((product) => {
                <Product {...product} key={product.name} />;
            })}
        </div>
    );
};

export default ProductList;
