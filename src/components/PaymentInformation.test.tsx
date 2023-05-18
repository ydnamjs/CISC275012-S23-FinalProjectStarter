import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PaymentInformation from "./PaymentInformation";
import { ChakraProvider } from "@chakra-ui/react";

describe("PaymentInformation", () => {
    test("renders PaymentInformation object", () => {
        <React.StrictMode>
            <ChakraProvider>
                <PaymentInformation />
            </ChakraProvider>
        </React.StrictMode>;
    });

    // Add more tests as needed
});
