import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddProduct from "./AddProduct";
import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom";

import { addWProduct } from "./ProductList";
import { AddWomensProduct } from "./AddProduct";

jest.mock("./ProductList", () => ({
    addWProduct: jest.fn()
}));

describe("AddProduct testing", () => {
    test("Testing AddProduct rendering", () => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <AddProduct />
                </ChakraProvider>
            </React.StrictMode>
        );
    });
    beforeEach(() => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <AddProduct />
                </ChakraProvider>
            </React.StrictMode>
        );
    });
    test("Picture label exists in component", () => {
        const picture = screen.getByText("Picture");
        expect(picture).toBeInTheDocument();
    });
    test("Material Type is not present", () => {
        const mat = screen.queryByText(/Material/i);
        expect(mat).toBeNull();
    });
});
