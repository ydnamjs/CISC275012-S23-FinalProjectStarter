import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom/extend-expect";

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
    test("Checks if Shop Page appears", () => {
        const shopPageHeader = screen.getByText(/Shop/i);
        expect(shopPageHeader).toBeInTheDocument();
    });
    test("Checks if Login Page appears", () => {
        const loginPageHeader = screen.getByText(/Login/i);
        expect(loginPageHeader).toBeInTheDocument();
    });
    test("Checks Admin Page appears", () => {
        const adminPageHeader = screen.getByText(/Admin/i);
        expect(adminPageHeader).toBeInTheDocument();
    });
});
