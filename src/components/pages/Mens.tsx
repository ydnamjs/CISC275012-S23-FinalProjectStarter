import React from "react";
import NavBar from "../Navbar";
import ProductListMen from "../ProductListMen";
import { Center, Text } from "@chakra-ui/react";

const Mens = () => {
    return (
        <div className="background">
            <NavBar />
            <Center>
                <Text as="b" fontSize="6xl">
                    Mens Clothing
                </Text>
            </Center>
            <ProductListMen />
        </div>
    );
};
export default Mens;
