import React from "react";
import { fireEvent, render } from "@testing-library/react";
import CartDisplay from "./CartDisplay";
//import userEvent from "@testing-library/user-event";

describe("CartDisplay Component tests, covering Cart MVP element", () => {
    test("Clicking 'Add one to Cart' button increases the stock count by 1", () => {
        // Initial stock value
        const initialCart1 = 0;
        const initialStock1 = 2;
        const initialOrder = "";
        const initialOrderArray = [<div key="1">Order 1</div>];
        const initialOrderKey = 0;

        // Function to update stock1 value
        const setCart1 = jest.fn();
        const setStock1 = jest.fn();
        const setOrder = jest.fn();
        const setOrderArray = jest.fn();
        const setOrderKey = jest.fn();

        // Render the StockEditor component
        const { getByTestId } = render(
            <CartDisplay
                shirtCart1={initialCart1}
                setShirtCart1={setCart1}
                shirtCart2={initialCart1}
                setShirtCart2={setCart1}
                shirtCart3={initialCart1}
                setShirtCart3={setCart1}
                shirtCart4={initialCart1}
                setShirtCart4={setCart1}
                shirtCart5={initialCart1}
                setShirtCart5={setCart1}
                shirtCart6={initialCart1}
                setShirtCart6={setCart1}
                sweatCart1={initialCart1}
                sweatSetCart1={setCart1}
                sweatCart2={initialCart1}
                sweatSetCart2={setCart1}
                sweatCart3={initialCart1}
                sweatSetCart3={setCart1}
                sweatCart4={initialCart1}
                sweatSetCart4={setCart1}
                sweatCart5={initialCart1}
                sweatSetCart5={setCart1}
                sweatCart6={initialCart1}
                sweatSetCart6={setCart1}
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
                setEmailOrder={setOrder}
                setNameOrder={setOrder}
                setPaymentInfo={setOrder}
                setAddressOrder={setOrder}
                emailOrder={initialOrder}
                nameOrder={initialOrder}
                paymentInfo={initialOrder}
                addressOrder={initialOrder}
                orderArray={initialOrderArray}
                setOrderArray={setOrderArray}
                orderKey={initialOrderKey}
                setOrderKey={setOrderKey}
            />
        );

        // Find the "Add one to Stock" button and click it
        const addButton = getByTestId("addshirtCart1");
        fireEvent.click(addButton);

        // Check if setCart1 function was called with the correct value
        expect(setCart1).toHaveBeenCalledWith(initialCart1 + 1);
    });
    test("Clicking 'Remove one to Cart' button decreases the stock count by 1", () => {
        // Initial stock value
        const initialCart1 = 2;
        const initialStock1 = 2;
        const initialOrder = "";
        const initialOrderArray = [<div key="1">Order 1</div>];
        const initialOrderKey = 0;

        // Function to update stock1 value
        const setCart1 = jest.fn();
        const setStock1 = jest.fn();
        const setOrder = jest.fn();
        const setOrderArray = jest.fn();
        const setOrderKey = jest.fn();

        // Render the StockEditor component
        const { getByTestId } = render(
            <CartDisplay
                shirtCart1={initialCart1}
                setShirtCart1={setCart1}
                shirtCart2={initialCart1}
                setShirtCart2={setCart1}
                shirtCart3={initialCart1}
                setShirtCart3={setCart1}
                shirtCart4={initialCart1}
                setShirtCart4={setCart1}
                shirtCart5={initialCart1}
                setShirtCart5={setCart1}
                shirtCart6={initialCart1}
                setShirtCart6={setCart1}
                sweatCart1={initialCart1}
                sweatSetCart1={setCart1}
                sweatCart2={initialCart1}
                sweatSetCart2={setCart1}
                sweatCart3={initialCart1}
                sweatSetCart3={setCart1}
                sweatCart4={initialCart1}
                sweatSetCart4={setCart1}
                sweatCart5={initialCart1}
                sweatSetCart5={setCart1}
                sweatCart6={initialCart1}
                sweatSetCart6={setCart1}
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
                setEmailOrder={setOrder}
                setNameOrder={setOrder}
                setPaymentInfo={setOrder}
                setAddressOrder={setOrder}
                emailOrder={initialOrder}
                nameOrder={initialOrder}
                paymentInfo={initialOrder}
                addressOrder={initialOrder}
                orderArray={initialOrderArray}
                setOrderArray={setOrderArray}
                orderKey={initialOrderKey}
                setOrderKey={setOrderKey}
            />
        );

        // Find the "Remove one to Stock" button and click it
        const addButton = getByTestId("removeshirtCart1");
        fireEvent.click(addButton);

        // Check if setCart1 function was called with the correct value
        expect(setCart1).toHaveBeenCalledWith(initialCart1 - 1);
    });
});
