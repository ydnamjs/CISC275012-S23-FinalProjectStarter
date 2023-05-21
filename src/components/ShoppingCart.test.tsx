import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ShoppingCart } from "./ShoppingCart";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";
import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom";

describe("ShoppingCart", () => {
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
    });
    beforeEach(() => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <ShoppingCartProvider>
                        <ShoppingCart isOpen={true} />
                    </ShoppingCartProvider>
                </ChakraProvider>
            </React.StrictMode>
        );
    });
    test("An button named Exit exists", () => {
        const exit = screen.getByRole("button", { name: /Exit/i });
        expect(exit).toBeInTheDocument();
    });
    test("An button named Checkout exists", () => {
        const checkout = screen.getByRole("button", { name: /Checkout/i });
        expect(checkout).toBeInTheDocument();
    });
    test("In Cart text is present in cart", () => {
        const cartText = screen.getByText("In Cart:");
        expect(cartText).toBeInTheDocument();
    });
    test("renders a link to the checkout page with the correct URL", () => {
        const checkoutLink = screen.getByRole("link", {
            name: "Checkout"
        }) as HTMLAnchorElement;
        fireEvent.click(checkoutLink);

        expect(checkoutLink.href).toContain("/#/checkout");
    });
});
