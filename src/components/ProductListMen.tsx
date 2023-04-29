import React from "react";
import Product from "./Product";
import { Row } from "react-bootstrap";
import "./ProductList.css";

export const prod = [
    {
        name: "UD Football Shirt",
        price: 10,
        description: "Support UD Football in this grey t-shirt!",
        sizes: ["S", "M", "L"],
        picture: "ud_shirt"
    },
    {
        name: "UD Crewneck",
        price: 35,
        description: "Support UD in this comfy  crewneck.",
        sizes: ["S", "M", "L"],
        picture: "UDcrew"
    },
    {
        name: "Jeans",
        price: 20,
        description: "These breathable jeans are perfect for work or school.",
        sizes: ["S", "M", "L"],
        picture: "jeans"
    },
    {
        name: "Sweat-Pants",
        price: 15,
        description: "Enjoy the comfortability of these casual sweatpants.",
        sizes: ["S", "M", "L"],
        picture: "sweatpants"
    },
    {
        name: "Nike Hoodie",
        price: 45,
        description: "Look sporty with this breathable Nike athletic hoodie.",
        sizes: ["S", "M", "L"],
        picture: "nikeHood"
    },
    {
        name: "Apple T-Shirt",
        price: 25,
        description: "Think different.",
        sizes: ["S", "M", "L"],
        picture: "appleT"
    }
];

const ProductListMen = () => {
    const prodList = prod.map((item) => <Product {...item} key={item.name} />);
    return (
        <div>
            <Row md={2} xs={2} lg={3} className="g-3">
                {prodList}
            </Row>
        </div>
    );
};

export default ProductListMen;
