import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import Product from "./Product";
import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom";

describe("Testing Product Component", () => {
    const mockProduct = {
        name: "Example Product",
        price: 9.99,
        stock: 10,
        description: "Example description",
        picture: "example-picture",
        sizes: ["S", "M", "L"],
        category: "Shirt"
    };
    test("testing Product render", () => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <Product {...mockProduct} />
                </ChakraProvider>
            </React.StrictMode>
        );
    });
});
