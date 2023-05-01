import React from "react";
import NavBar from "../Navbar";
import { Center, Text } from "@chakra-ui/react";
import ProductListWomen from "../ProductListWomen";

const Womens = () => {
    return (
        <div className="background">
            <NavBar />
            <Center>
                <Text as="b" fontSize="6xl">
                    Womens Clothing
                </Text>
            </Center>
            <ProductListWomen />
        </div>
    );
};
export default Womens;
