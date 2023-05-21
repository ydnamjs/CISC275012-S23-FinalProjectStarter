import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom/extend-expect";

import { MemoryRouter, Route } from "react-router-dom";

describe("App", () => {
    beforeEach(() => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <App />
                </ChakraProvider>
            </React.StrictMode>
        );
    });
    test("Checks if Routing to Shop Page works", () => {
        const shopPageHeader = screen.getByText(/Shop/i);
        expect(shopPageHeader).toBeInTheDocument();
    });
    test("Checks if Routing to Login works", () => {
        const loginPageHeader = screen.getByText(/Login/i);
        expect(loginPageHeader).toBeInTheDocument();
    });
    test("Checks if Routing to Admin works", () => {
        const adminPageHeader = screen.getByText(/Admin/i);
        expect(adminPageHeader).toBeInTheDocument();
    });
});
