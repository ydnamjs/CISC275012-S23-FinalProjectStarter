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

export const prodW = [
    {
        name: "UD T-Shirt",
        price: 10,
        stock: 10,
        description: "Support UD in this grey t-shirt!",
        sizes: ["S", "M", "L"],
        picture: "WTShirt",
        category: "Shirts"
    },
    {
        name: "UD Sweater",
        price: 35,
        stock: 10,
        description: "Support UD in this comfy sweater.",
        sizes: ["S", "M", "L"],
        picture: "Wcrew",
        category: "Shirts"
    },
    {
        name: "Ripped Jeans",
        price: 20,
        stock: 10,
        description: "These stylish jeans are perfect for any casual event.",
        sizes: ["S", "M", "L"],
        picture: "ripped",
        category: "Pants"
    },
    {
        name: "UD Sweatpants",
        price: 15,
        stock: 10,
        description: "Enjoy the comfortability of these UD sweatpants.",
        sizes: ["S", "M", "L"],
        picture: "UDswpants",
        category: "Pants"
    },
    {
        name: "Nike Sport Crewneck",
        price: 45,
        stock: 10,
        description: "Look sporty with this breathable Nike Crew.",
        sizes: ["S", "M", "L"],
        picture: "SportSweater",
        category: "Shirts"
    },
    {
        name: "North Face Zip-Up",
        price: 25,
        stock: 10,
        description: "Go anywhere in this zip-up hoodie from North Face.",
        sizes: ["S", "M", "L"],
        picture: "NFHood",
        category: "Hoodies"
    }
];

const filterOptions = ["All", "Shirts", "Pants", "Hoodies"];

const ProductListWomen = () => {
    const [selectedFilter, setSelectedFilter] = useState("All");

    const filteredProd =
        selectedFilter === "All"
            ? prodW
            : prodW.filter((item) => item.category === selectedFilter);
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

export default ProductListWomen;
