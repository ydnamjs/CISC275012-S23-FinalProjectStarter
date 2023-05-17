import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import Modal from "./Modal";
import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom";

describe("Modal testing", () => {
    test("Testing to see if In Cart: text exists", () => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <Modal />
                </ChakraProvider>
            </React.StrictMode>
        );
    });
});
