/* eslint-disable react/jsx-key */
/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import Product from "./Product";
import "./ProductList.css";
import {
    Button,
    Center,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    SimpleGrid
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const prodM = [
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
            ? prodM
            : prodM.filter((item) => item.category === selectedFilter);
    return (
        <div style={{ padding: 15 }}>
            <Center>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        {selectedFilter}
                    </MenuButton>

                    <MenuList>
                        {filterOptions.map((option) => (
                            <MenuItem
                                onClick={() => {
                                    setSelectedFilter(option);
                                }}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </Center>
            <br></br>
            <Center>
                <SimpleGrid columns={2} spacing={10}>
                    {filteredProd.map((item) => (
                        <Product {...item} key={item.name} />
                    ))}
                </SimpleGrid>
            </Center>
        </div>
    );
};

export default ProductListMen;
