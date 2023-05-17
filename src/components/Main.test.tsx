import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import Main from "./Main";
import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom";

describe("testing Main", () => {
    test("testing Main rendering", () => {
        <React.StrictMode>
            <ChakraProvider>
                <Main />
            </ChakraProvider>
        </React.StrictMode>;
    });
});
