import React, { useState } from "react";
import Product from "./Product";
import { Row, Dropdown } from "react-bootstrap";
import "./ProductList.css";

export const prod = [
    {
        name: "UD Football Shirt",
        price: 10,
        description: "Support UD Football in this grey t-shirt!",
        sizes: ["S", "M", "L"],
        picture: "ud_shirt",
        category: "Shirts"
    },
    {
        name: "UD Crewneck",
        price: 35,
        description: "Support UD in this comfy  crewneck.",
        sizes: ["S", "M", "L"],
        picture: "UDcrew",
        category: "Shirts"
    },
    {
        name: "Jeans",
        price: 20,
        description: "These breathable jeans are perfect for work or school.",
        sizes: ["S", "M", "L"],
        picture: "jeans",
        category: "Pants"
    },
    {
        name: "Sweat-Pants",
        price: 15,
        description: "Enjoy the comfortability of these casual sweatpants.",
        sizes: ["S", "M", "L"],
        picture: "sweatpants",
        category: "Pants"
    },
    {
        name: "Nike Hoodie",
        price: 45,
        description: "Look sporty with this breathable Nike athletic hoodie.",
        sizes: ["S", "M", "L"],
        picture: "nikeHood",
        category: "Hoodies"
    },
    {
        name: "Apple T-Shirt",
        price: 25,
        description: "Think different.",
        sizes: ["S", "M", "L"],
        picture: "appleT",
        category: "Shirts"
    }
];

const filterOptions = ["All", "Shirts", "Pants", "Hoodies"];

const ProductListMen = () => {
    const [selectedFilter, setSelectedFilter] = useState("All");

    const filteredProd =
        selectedFilter === "All"
            ? prod
            : prod.filter((x) => x.category === selectedFilter);

    const prodList = filteredProd.map((x) => <Product {...x} key={x.name} />);

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="filter-dropdown">
                    {selectedFilter}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {
                        // eslint-disable-next-line prettier/prettier
                        filterOptions.map((y) => (
                            <Dropdown.Item
                                key={y}
                                onClick={() => setSelectedFilter(y)}
                            >
                                {y}
                            </Dropdown.Item>
                        ))
                    }
                </Dropdown.Menu>
            </Dropdown>
            <Row md={2} xs={2} lg={3} className="g-3">
                {prodList}
            </Row>
        </div>
    );
};

export default ProductListMen;
