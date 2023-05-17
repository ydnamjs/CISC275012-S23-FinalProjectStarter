import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import Logout from "./AddProduct";
import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom";

describe("Logout testing", () => {
    test("Testing Logout rendering", () => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <Logout />
                </ChakraProvider>
            </React.StrictMode>
        );
    });
});
