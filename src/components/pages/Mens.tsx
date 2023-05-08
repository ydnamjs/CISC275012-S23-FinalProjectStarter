import React from "react";
import NavBar from "../Navbar";
import "../ProductList";
import { Center, Text } from "@chakra-ui/react";
import ProductListWomen, { ProductListMen } from "../ProductList";

const Mens = () => {
    return (
        <div className="background">
            <NavBar />
            <Center>
                <Text as="b" fontSize="6xl">
                    Men{"'"}s Clothing
                </Text>
            </Center>
            <ProductListMen />
            <Center>
                <Text as="b" fontSize="6xl">
                    Women{"'"}s Clothing
                </Text>
            </Center>
            <ProductListWomen />
        </div>
    );
};
export default Mens;
