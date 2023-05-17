import React from "react";
import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";
import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom";

describe("Testing ProductList Component", () => {
    test("testing rendering", () => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <ProductList />
                </ChakraProvider>
            </React.StrictMode>
        );
    });
});
