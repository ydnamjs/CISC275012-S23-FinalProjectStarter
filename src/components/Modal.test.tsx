import React from "react";
import { render, screen } from "@testing-library/react";
import Modal from "./Modal";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Link } from "react-router-dom";

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
});
