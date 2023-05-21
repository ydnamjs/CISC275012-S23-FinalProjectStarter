import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("NavBar tests", () => {
    test("testing rendering", () => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <BrowserRouter>
                        <Navbar />
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
                        <Navbar />
                    </BrowserRouter>
                </ChakraProvider>
            </React.StrictMode>
        );
    });
    test("User item is in NavBar", () => {
        expect(screen.getByText(/User/i)).toBeInTheDocument();
    });
    test("Shop item is in NavBar", () => {
        expect(screen.getByText(/Shop/i)).toBeInTheDocument();
    });
    test("Login item is in NavBar", () => {
        expect(screen.getByText(/Login/i)).toBeInTheDocument();
    });
    test("Webpage name is in NavBar", () => {
        expect(screen.getByText(/E F F O R T L E S S/i)).toBeInTheDocument();
    });
    test("Roles item is in NavBar", () => {
        expect(screen.getByText(/Roles/i)).toBeInTheDocument();
    });
});
