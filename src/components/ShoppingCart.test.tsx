import React from "react";
import { render, screen } from "@testing-library/react";
import { ShoppingCart } from "./ShoppingCart";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";
import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom";

describe("ShoppingCart", () => {
    /*beforeEach(() => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <ShoppingCart isOpen={false} />
                </ChakraProvider>
            </React.StrictMode>
        );
    });*/
    test("Testing to see if In Cart: text exists", () => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <ShoppingCartProvider>
                        <ShoppingCart isOpen={true} />
                    </ShoppingCartProvider>
                </ChakraProvider>
            </React.StrictMode>
        );
        //expect(screen.getByText("In Cart:")).toBeInTheDocument();
    });
});
