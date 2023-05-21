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
        expect(screen.queryByText(itemName)).toBeNull();
    });
    test("quantity text is not in component", () => {
        expect(screen.queryByText("quantity")).not.toBeInTheDocument();
    });
});
