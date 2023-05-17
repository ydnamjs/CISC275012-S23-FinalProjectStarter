import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import AddProduct from "./AddProduct";
import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom";

describe("CartItem testing", () => {
    test("Testing to see if In Cart: text exists", () => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <AddProduct />
                </ChakraProvider>
            </React.StrictMode>
        );
    });
});
