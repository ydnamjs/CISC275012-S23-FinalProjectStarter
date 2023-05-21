import React from "react";
import { render, screen } from "@testing-library/react";
import AddProduct from "./AddProduct";
import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom";

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
    test("Categories show up", () => {
        const mat = screen.queryAllByText(/Category/i);
        expect(mat[0]).toBeInTheDocument();
    });
});
