import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Link } from "react-router-dom";
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
});
