import React from "react";
import { render, screen } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom";
import { CheckoutItem } from "./CheckoutItem";

describe("CheckoutItem testing", () => {
    test("Testing CheckoutItem rendering", () => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <CheckoutItem name={""} quantity={0} />
                </ChakraProvider>
            </React.StrictMode>
        );
    });
    beforeEach(() => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <CheckoutItem name={""} quantity={0} />
                </ChakraProvider>
            </React.StrictMode>
        );
    });
    test("renders nothing if item name is not found", () => {
        const itemName = "Non-existing Product";
        // Verify that the component renders nothing
        expect(screen.queryByText(itemName)).toBeNull();
    });
});
