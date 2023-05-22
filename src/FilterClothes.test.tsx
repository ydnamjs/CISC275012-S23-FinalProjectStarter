import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { FilterClothes } from "./FilterClothes";
//import { ColorFilter } from "./ColorFilter";
//import { ClothingDisplay } from "./ClothingDisplay";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

describe("FilterClothes Component tests, covering Inventory MVP element", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <FilterClothes
                    stockOne={0}
                    stockTwo={0}
                    stockThree={0}
                    stockFour={0}
                    stockFive={0}
                    stockSix={0}
                    sweatStockOne={0}
                    sweatStockTwo={0}
                    sweatStockThree={0}
                    sweatStockFour={0}
                    sweatStockFive={0}
                    sweatStockSix={0}
                    shirtCart1={0}
                    shirtCart2={0}
                    shirtCart3={0}
                    shirtCart4={0}
                    shirtCart5={0}
                    shirtCart6={0}
                    setShirtCart1={jest.fn()}
                    setShirtCart2={jest.fn()}
                    setShirtCart3={jest.fn()}
                    setShirtCart4={jest.fn()}
                    setShirtCart5={jest.fn()}
                    setShirtCart6={jest.fn()}
                    setStock1={jest.fn()}
                    setStock2={jest.fn()}
                    setStock3={jest.fn()}
                    setStock4={jest.fn()}
                    setStock5={jest.fn()}
                    setStock6={jest.fn()}
                    sweatCart1={0}
                    sweatCart2={0}
                    sweatCart3={0}
                    sweatCart4={0}
                    sweatCart5={0}
                    sweatCart6={0}
                    sweatSetCart1={jest.fn()}
                    sweatSetCart2={jest.fn()}
                    sweatSetCart3={jest.fn()}
                    sweatSetCart4={jest.fn()}
                    sweatSetCart5={jest.fn()}
                    sweatSetCart6={jest.fn()}
                    sweatSetStock1={jest.fn()}
                    sweatSetStock2={jest.fn()}
                    sweatSetStock3={jest.fn()}
                    sweatSetStock4={jest.fn()}
                    sweatSetStock5={jest.fn()}
                    sweatSetStock6={jest.fn()}
                />
            </BrowserRouter>
        );
    });
    test("When sweatshirt button is clicked, only sweatshirts are displayed", () => {
        const sweatshirtButton = screen.getByRole("button", {
            name: /Sweatshirt/i
        });
        sweatshirtButton.click();
        const sweatshirts = screen.queryAllByAltText("Sweatshirt");
        expect(sweatshirts).toHaveLength(6);
        const shirts = screen.queryAllByAltText("Shirt");
        expect(shirts).toHaveLength(0);
    });

    test("When shirt button is clicked, only shirts are displayed", () => {
        const shirtButton = screen.getByRole("button", {
            name: /Shirts/i
        });
        shirtButton.click();
        const sweatshirts = screen.queryAllByAltText("Sweatshirt");
        expect(sweatshirts).toHaveLength(0);
        const shirts = screen.queryAllByAltText("Shirt");
        expect(shirts).toHaveLength(6);
    });

    test("When yellow is selected, all yellow clothing is displayed", async () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "yellow");

        // Wait for the color filter to take effect
        await waitFor(() => {
            const yellowClothes = screen.queryAllByTestId("yellow");
            expect(yellowClothes).toHaveLength(2);

            // Check other shirts and sweatshirts to make sure nothing else is there
            const nonYellowShirts = screen
                .queryAllByAltText("Shirt")
                .filter((shirt) => !yellowClothes.includes(shirt));
            const nonYellowSweatshirts = screen
                .queryAllByAltText("Sweatshirt")
                .filter((sweatshirt) => !yellowClothes.includes(sweatshirt));
            expect(nonYellowShirts).toHaveLength(0);
            expect(nonYellowSweatshirts).toHaveLength(0);
        });
    });

    test("When red is selected, all red clothing is displayed", async () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "red");

        // Wait for the color filter to take effect
        await waitFor(() => {
            const redClothes = screen.queryAllByTestId("red");
            expect(redClothes).toHaveLength(2);

            // Check other shirts and sweatshirts to make sure nothing else is there
            const nonRedShirts = screen
                .queryAllByAltText("Shirt")
                .filter((shirt) => !redClothes.includes(shirt));
            const nonRedSweatshirts = screen
                .queryAllByAltText("Sweatshirt")
                .filter((sweatshirt) => !redClothes.includes(sweatshirt));
            expect(nonRedShirts).toHaveLength(0);
            expect(nonRedSweatshirts).toHaveLength(0);
        });
    });

    test("When blue is selected, all blue clothing is displayed", async () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "blue");

        // Wait for the color filter to take effect
        await waitFor(() => {
            const blueClothes = screen.queryAllByTestId("blue");
            expect(blueClothes).toHaveLength(2);

            // Check other shirts and sweatshirts to make sure nothing else is there
            const nonBlueShirts = screen
                .queryAllByAltText("Shirt")
                .filter((shirt) => !blueClothes.includes(shirt));
            const nonBlueSweatshirts = screen
                .queryAllByAltText("Sweatshirt")
                .filter((sweatshirt) => !blueClothes.includes(sweatshirt));
            expect(nonBlueShirts).toHaveLength(0);
            expect(nonBlueSweatshirts).toHaveLength(0);
        });
    });

    test("When black is selected, all black clothing is displayed", async () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "black");

        // Wait for the color filter to take effect
        await waitFor(() => {
            const blackClothes = screen.queryAllByTestId("black");
            expect(blackClothes).toHaveLength(2);

            // Check other shirts and sweatshirts to make sure nothing else is there
            const nonBlackShirts = screen
                .queryAllByAltText("Shirt")
                .filter((shirt) => !blackClothes.includes(shirt));
            const nonBlackSweatshirts = screen
                .queryAllByAltText("Sweatshirt")
                .filter((sweatshirt) => !blackClothes.includes(sweatshirt));
            expect(nonBlackShirts).toHaveLength(0);
            expect(nonBlackSweatshirts).toHaveLength(0);
        });
    });

    test("When purple is selected, all purple clothing is displayed", async () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "purple");

        // Wait for the color filter to take effect
        await waitFor(() => {
            const purpleClothes = screen.queryAllByTestId("purple");
            expect(purpleClothes).toHaveLength(1);

            // Check other shirts and sweatshirts to make sure nothing else is there
            const nonPurpleShirts = screen
                .queryAllByAltText("Shirt")
                .filter((shirt) => !purpleClothes.includes(shirt));
            const nonPurpleSweatshirts = screen
                .queryAllByAltText("Sweatshirt")
                .filter((sweatshirt) => !purpleClothes.includes(sweatshirt));
            expect(nonPurpleShirts).toHaveLength(0);
            expect(nonPurpleSweatshirts).toHaveLength(0);
        });
    });

    test("When pink is selected, all pink clothing is displayed", async () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "pink");

        // Wait for the color filter to take effect
        await waitFor(() => {
            const pinkClothes = screen.queryAllByTestId("pink");
            expect(pinkClothes).toHaveLength(1);

            // Check other shirts and sweatshirts to make sure nothing else is there
            const nonPinkShirts = screen
                .queryAllByAltText("Shirt")
                .filter((shirt) => !pinkClothes.includes(shirt));
            const nonPinkSweatshirts = screen
                .queryAllByAltText("Sweatshirt")
                .filter((sweatshirt) => !pinkClothes.includes(sweatshirt));
            expect(nonPinkShirts).toHaveLength(0);
            expect(nonPinkSweatshirts).toHaveLength(0);
        });
    });

    test("When green is selected, all green clothing is displayed", async () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "green");

        // Wait for the color filter to take effect
        await waitFor(() => {
            const greenClothes = screen.queryAllByTestId("green");
            expect(greenClothes).toHaveLength(2);

            // Check other shirts and sweatshirts to make sure nothing else is there
            const nonGreenShirts = screen
                .queryAllByAltText("Shirt")
                .filter((shirt) => !greenClothes.includes(shirt));
            const nonGreenSweatshirts = screen
                .queryAllByAltText("Sweatshirt")
                .filter((sweatshirt) => !greenClothes.includes(sweatshirt));
            expect(nonGreenShirts).toHaveLength(0);
            expect(nonGreenSweatshirts).toHaveLength(0);
        });
    });

    test("When all is selected, all all clothing is displayed", async () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "all");

        ///check all shirts and all sweatshirts
        const allShirts = screen.queryAllByAltText("Shirt");
        const allSweatShirts = screen.queryAllByAltText("Sweatshirt");
        expect(allShirts).toHaveLength(6);
        expect(allSweatShirts).toHaveLength(6);
    });
});
