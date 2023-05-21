import React from "react";
import { render, screen } from "@testing-library/react";
import { CartItem } from "./CartItem";
import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom";

describe("CartItem testing", () => {
    const mockItem = {
        name: "Test Item",
        quantity: 2,
        price: 10,
        description: "Test Description",
        sizes: ["S", "M", "L"],
        picture: "test-picture",
        category: "Test Category"
    };
    test("Testing CartItem rendering", () => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <CartItem name={""} quantity={0} />
                </ChakraProvider>
            </React.StrictMode>
        );
    });
    beforeEach(() => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <CartItem
                        name={mockItem.name}
                        quantity={mockItem.quantity}
                    />
                </ChakraProvider>
            </React.StrictMode>
        );
    });
    test("renders nothing if nothing in cart", () => {
        const itemName = "No cart";
        expect(screen.queryByText(itemName)).toBeNull();
    });
    test("money text is not in component", () => {
        expect(screen.queryByText("money")).not.toBeInTheDocument();
    });
});
