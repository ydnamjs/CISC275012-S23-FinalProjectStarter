import React from "react";
import { render, screen } from "@testing-library/react";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";
import Product from "../components/Product";
import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom";

describe("Testing Product Component", () => {
    const mockProduct = {
        name: "UD Football Shirt",
        price: 10,
        stock: 10,
        description: "Support UD Football in this grey t-shirt!",
        picture: "ud_shirt",
        sizes: ["S", "M", "L"],
        category: "Shirts"
    };
    test("testing Product render", () => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <ShoppingCartProvider>
                        <Product {...mockProduct} />
                    </ShoppingCartProvider>
                </ChakraProvider>
            </React.StrictMode>
        );
    });
    beforeEach(() => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <ShoppingCartProvider>
                        <Product {...mockProduct} />
                    </ShoppingCartProvider>
                </ChakraProvider>
            </React.StrictMode>
        );
    });
    test("Remove button text appears", () => {
        expect(screen.getByText(/Remove/i)).toBeInTheDocument();
    });
    test("- button exists", () => {
        expect(screen.getByRole("button", { name: "-" })).toBeInTheDocument();
    });
    test("+ button exists", () => {
        expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();
    });
});
