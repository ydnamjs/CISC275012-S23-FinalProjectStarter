import React from "react";
import { render, screen } from "@testing-library/react";
import Modal from "./Modal";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom";

describe("Modal testing", () => {
    test("Testing to see if In Cart: text exists", () => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <BrowserRouter>
                        <Modal />
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
                        <Modal />
                    </BrowserRouter>
                </ChakraProvider>
            </React.StrictMode>
        );
    });
    test("Shipping Information text exists", () => {
        const shipping = screen.getByText(/Shipping Information/i);
        expect(shipping).toBeInTheDocument();
    });
    test("City text exists", () => {
        const city = screen.getByText(/City/i);
        expect(city).toBeInTheDocument();
    });
    test("State text exists", () => {
        const state = screen.getByText(/State/i);
        expect(state).toBeInTheDocument();
    });
    test("Zipcode text exists", () => {
        const zip = screen.getByText(/Zipcode/i);
        expect(zip).toBeInTheDocument();
    });
    test("Middle Name field does not exist", () => {
        const middle = screen.queryByText(/Middle Name/i);
        expect(middle).not.toBeInTheDocument();
    });
});
