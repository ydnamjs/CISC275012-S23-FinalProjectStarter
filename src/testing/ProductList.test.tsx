import React from "react";
import { render, screen } from "@testing-library/react";
import ProductList, { prodM } from "../components/ProductList";
import { ChakraProvider } from "@chakra-ui/react";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";
import "@testing-library/jest-dom";

describe("Testing ProductList Component", () => {
    test("testing rendering", () => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <ShoppingCartProvider>
                        <ProductList />
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
                        <ProductList />
                    </ShoppingCartProvider>
                </ChakraProvider>
            </React.StrictMode>
        );
    });
    test("There is more than 1 Remove Button", () => {
        const remove = screen.getAllByRole("button", { name: /Remove/i });
        expect(remove.length).toBeGreaterThan(1);
    });
    test("Initial selected filter is 'All' for product list", () => {
        const selectedFilter = screen.getByRole("button", { name: "All" });
        expect(selectedFilter).toBeInTheDocument();
    });
    test("Testing to see if an added product is recognized", () => {
        const expectedProduct = {
            name: "UD Football Shirt",
            price: 10,
            stock: 10,
            description: "Support UD Football in this grey t-shirt!",
            sizes: ["S", "M", "L"],
            picture: "ud_shirt",
            category: "Shirts"
        };

        const foundProduct = prodM.find(
            (product) => product.name === expectedProduct.name
        );

        expect(foundProduct).toEqual(expectedProduct);
    });
});
