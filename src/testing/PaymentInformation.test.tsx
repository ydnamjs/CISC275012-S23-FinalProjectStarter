import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PaymentInformation from "../components/PaymentInformation";
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
    test("Confirmation messages work properly", () => {
        expect(screen.getByText("Confirm details!")).toBeInTheDocument();
        fireEvent.click(screen.getByRole("button"));
        expect(screen.getByText("Confirmed!")).toBeInTheDocument();
    });
    test("Additional Fields exist on site", () => {
        expect(screen.getByText("Payment Details")).toBeInTheDocument();
        expect(screen.getByText("Cardholder Name")).toBeInTheDocument();
        expect(screen.getByText("Card Number")).toBeInTheDocument();
        expect(screen.getByText("Security Code")).toBeInTheDocument();
    });
});
