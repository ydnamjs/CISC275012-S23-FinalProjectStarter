import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import Product from "./Product";
import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom";

describe("Testing Product Component", () => {
    test("testing Product render", () => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <Product
                        name={""}
                        price={0}
                        stock={0}
                        sizes={[]}
                        description={""}
                        picture={""}
                        category={""}
                    />
                </ChakraProvider>
            </React.StrictMode>
        );
    });
});
