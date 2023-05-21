import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Main from "./Main";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("testing Main", () => {
    test("testing Main rendering", () => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <BrowserRouter>
                        <Main />
                    </BrowserRouter>
                </ChakraProvider>
            </React.StrictMode>
        );
    });
    beforeEach(() => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <BrowserRouter>
                        <Main />
                    </BrowserRouter>
                </ChakraProvider>
            </React.StrictMode>
        );
    });
    test("E F F O R T L E S S exists", () => {
        const name = screen.getAllByText(/E F F O R T L E S S/i);
        expect(name[0]).toBeInTheDocument();
    });
    test("Redefining Athletic Wear exists", () => {
        const name = screen.getAllByText(/Redefining Athletic Wear/i);
        expect(name[0]).toBeInTheDocument();
    });
    test("NavBar works properly", () => {
        const nav = screen.getByRole("navigation");
        expect(nav).toBeInTheDocument();
    });
});
