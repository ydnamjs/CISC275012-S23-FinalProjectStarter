import React from "react";
import Product from "./Product";
import { Row } from "react-bootstrap";
import "./ProductList.css";

const prod = [
    {
        name: "Product 1",
        price: 10,
        description: "Lorem ipsum dolor sit amet.",
        sizes: ["S", "M", "L"],
        picture: "ud_shirt"
    },
    {
        name: "Product 2",
        price: 20,
        description: "Consectetur adipiscing elit.",
        sizes: ["S", "M", "L"],
        picture: "ud_shirt"
    },
    {
        name: "Product 3",
        price: 30,
        description: "Nullam accumsan cursus semper.",
        sizes: ["S", "M", "L"],
        picture: "ud_shirt"
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
