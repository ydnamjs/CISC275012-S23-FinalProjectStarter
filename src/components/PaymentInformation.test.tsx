import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PaymentInformation from "./PaymentInformation";
import { ChakraProvider } from "@chakra-ui/react";

describe("PaymentInformation", () => {
    test("renders PaymentInformation object", () => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <PaymentInformation />
                </ChakraProvider>
            </React.StrictMode>
        );
    });
    beforeEach(() => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <PaymentInformation />
                </ChakraProvider>
            </React.StrictMode>
        );
    });
    test("Expiration month and year in text", () => {
        expect(screen.getByText("Expiration Month")).toBeInTheDocument();
        expect(screen.getByText("Expiration Year")).toBeInTheDocument();
    });
    test("Confirmation messages exist", () => {
        expect(screen.getByText("Confirm details!")).toBeInTheDocument();

        // Simulate a click event to toggle the state value
        fireEvent.click(screen.getByRole("button"));

        // Check that the text content has changed to "Confirmed!"
        expect(screen.getByText("Confirmed!")).toBeInTheDocument();
    });

    // Add more tests as needed
});
