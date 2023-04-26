import React from "react";
import Product from "./Product";
import { Row, Col } from "react-bootstrap";
import "./ProductList.css";

const prod = [
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

const ProductListMen = () => {
    //let filter = "name";
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
