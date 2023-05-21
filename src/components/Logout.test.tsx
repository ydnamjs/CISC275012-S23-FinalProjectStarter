import React from "react";
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
    beforeEach(() => {
        render(
            <React.StrictMode>
                <ChakraProvider>
                    <Logout />
                </ChakraProvider>
            </React.StrictMode>
        );
    });
    /*test("checks that username and password are in component", () => {
        //const user = screen.getByText("username");
        //const logout = screen.getByText("password");
        //expect(user).toBeInTheDocument();
        //expect(logout).toBeInTheDocument();
        const useE = screen.getByText(/useEffect/i);
        expect(useE).toBeInTheDocument();
    });
    test("removes username and password from local storage", () => {
        // Set initial values for username and password
        localStorage.setItem("username", "testuser");
        localStorage.setItem("password", "testpassword");

        // Check if username and password are removed from local storage
        expect(localStorage.getItem("username")).toBeNull();
        expect(localStorage.getItem("password")).toBeNull();
    });
    test("triggers the useEffect hook", () => {
        // Mock the removeItem function from localStorage
        const removeItemSpy = jest.spyOn(localStorage, "removeItem");

        // Check if the removeItem function was called with the expected arguments
        expect(removeItemSpy).toHaveBeenCalledWith("username");
        expect(removeItemSpy).toHaveBeenCalledWith("password");

        // Cleanup to reset the mock
        cleanup();
        removeItemSpy.mockRestore();
    });*/
});
