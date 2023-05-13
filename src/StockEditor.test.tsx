import React from "react";
import { fireEvent, render } from "@testing-library/react";
import StockEditor from "./StockEditor";
//import userEvent from "@testing-library/user-event";

describe("StockEditor Component tests, covering Admin MVP element", () => {
    test("Clicking 'Add one to Stock' button increases the stock count by 1", () => {
        // Initial stock value
        const initialStock1 = 2;

        // Function to update stock1 value
        const setStock1 = jest.fn();

        // Render the StockEditor component
        const { getByTestId } = render(
            <StockEditor
                stock1={initialStock1}
                setStock1={setStock1}
                stock2={initialStock1}
                setStock2={setStock1}
                stock3={initialStock1}
                setStock3={setStock1}
                stock4={initialStock1}
                setStock4={setStock1}
                stock5={initialStock1}
                setStock5={setStock1}
                stock6={initialStock1}
                setStock6={setStock1}
                sweatStock1={initialStock1}
                sweatSetStock1={setStock1}
                sweatStock2={initialStock1}
                sweatSetStock2={setStock1}
                sweatStock3={initialStock1}
                sweatSetStock3={setStock1}
                sweatStock4={initialStock1}
                sweatSetStock4={setStock1}
                sweatStock5={initialStock1}
                sweatSetStock5={setStock1}
                sweatStock6={initialStock1}
                sweatSetStock6={setStock1}
            />
        );

        // Find the "Add one to Stock" button and click it
        const addButton = getByTestId("addStock1");
        fireEvent.click(addButton);

        // Check if setStock1 function was called with the correct value
        expect(setStock1).toHaveBeenCalledWith(initialStock1 + 1);
    });
    test("Clicking 'Remove one to Stock' button decreases the stock count by 1", () => {
        // Initial stock value
        const initialStock1 = 2;

        // Function to update stock1 value
        const setStock1 = jest.fn();

        // Render the StockEditor component
        const { getByTestId } = render(
            <StockEditor
                stock1={initialStock1}
                setStock1={setStock1}
                stock2={initialStock1}
                setStock2={setStock1}
                stock3={initialStock1}
                setStock3={setStock1}
                stock4={initialStock1}
                setStock4={setStock1}
                stock5={initialStock1}
                setStock5={setStock1}
                stock6={initialStock1}
                setStock6={setStock1}
                sweatStock1={initialStock1}
                sweatSetStock1={setStock1}
                sweatStock2={initialStock1}
                sweatSetStock2={setStock1}
                sweatStock3={initialStock1}
                sweatSetStock3={setStock1}
                sweatStock4={initialStock1}
                sweatSetStock4={setStock1}
                sweatStock5={initialStock1}
                sweatSetStock5={setStock1}
                sweatStock6={initialStock1}
                sweatSetStock6={setStock1}
            />
        );

        // Find the "Remove one to Stock" button and click it
        const subButton = getByTestId("subStock1");
        fireEvent.click(subButton);

        // Check if setStock1 function was called with the correct value
        expect(setStock1).toHaveBeenCalledWith(initialStock1 - 1);
    });
});
