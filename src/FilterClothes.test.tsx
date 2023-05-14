import React from "react";
/*
import { render, screen } from "@testing-library/react";
import { FilterClothes } from "./FilterClothes";
//import { ColorFilter } from "./ColorFilter";
//import { ClothingDisplay } from "./ClothingDisplay";
import userEvent from "@testing-library/user-event";

describe("FilterClothes Component tests, covering Inventory MVP element", () => {
    beforeEach(() => {
        render(
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
                setShirtCart1={setShirtCart1}

            />
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
        const yellowClothes = screen.queryAllByTestId("yellow");
        expect(yellowClothes).toHaveLength(2);

        //check other shirts and other sweatshirts to make sure nothing else is there
        const nonOtherShirt = screen.queryAllByAltText("Shirt");
        const nonOtherSweatShirt = screen.queryAllByAltText("Sweatshirt");
        expect(nonOtherShirt).toHaveLength(1);
        expect(nonOtherSweatShirt).toHaveLength(1);
    });

    test("When red is selected, all red clothing is displayed", async () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "red");
        const redClothes = screen.queryAllByTestId("red");
        expect(redClothes).toHaveLength(2);

        //check other shirts and other sweatshirts to make sure nothing else is there
        const nonOtherShirt = screen.queryAllByAltText("Shirt");
        const nonOtherSweatShirt = screen.queryAllByAltText("Sweatshirt");
        expect(nonOtherShirt).toHaveLength(1);
        expect(nonOtherSweatShirt).toHaveLength(1);
    });

    test("When blue is selected, all blue clothing is displayed", async () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "blue");
        const blueClothes = screen.queryAllByTestId("blue");
        expect(blueClothes).toHaveLength(2);

        ///check other shirts and other sweatshirts to make sure nothing else is there
        const nonOtherShirt = screen.queryAllByAltText("Shirt");
        const nonOtherSweatShirt = screen.queryAllByAltText("Sweatshirt");
        expect(nonOtherShirt).toHaveLength(1);
        expect(nonOtherSweatShirt).toHaveLength(1);
    });

    test("When black is selected, all black clothing is displayed", async () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "black");
        const blackClothes = screen.queryAllByTestId("black");
        expect(blackClothes).toHaveLength(2);

        ///check other shirts and other sweatshirts to make sure nothing else is there
        const nonOtherShirt = screen.queryAllByAltText("Shirt");
        const nonOtherSweatShirt = screen.queryAllByAltText("Sweatshirt");
        expect(nonOtherShirt).toHaveLength(1);
        expect(nonOtherSweatShirt).toHaveLength(1);
    });

    test("When purple is selected, all purple clothing is displayed", async () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "purple");
        const purpleClothes = screen.queryAllByTestId("purple");
        expect(purpleClothes).toHaveLength(1);

        ///check other shirts and other sweatshirts to make sure nothing else is there
        const nonOtherShirt = screen.queryAllByAltText("Shirt");
        const nonOtherSweatShirt = screen.queryAllByAltText("Sweatshirt");
        expect(nonOtherShirt).toHaveLength(0);
        expect(nonOtherSweatShirt).toHaveLength(1);
    });

    test("When pink is selected, all pink clothing is displayed", async () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "pink");
        const pinkClothes = screen.queryAllByTestId("pink");
        expect(pinkClothes).toHaveLength(1);

        ///check other shirts and other sweatshirts to make sure nothing else is there
        const nonOtherShirt = screen.queryAllByAltText("Shirt");
        const nonOtherSweatShirt = screen.queryAllByAltText("Sweatshirt");
        expect(nonOtherShirt).toHaveLength(1);
        expect(nonOtherSweatShirt).toHaveLength(0);
    });

    test("When green is selected, all green clothing is displayed", async () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "green");
        const greenClothes = screen.queryAllByTestId("green");
        expect(greenClothes).toHaveLength(2);

        ///check other shirts and other sweatshirts to make sure nothing else is there
        const nonOtherShirt = screen.queryAllByAltText("Shirt");
        const nonOtherSweatShirt = screen.queryAllByAltText("Sweatshirt");
        expect(nonOtherShirt).toHaveLength(1);
        expect(nonOtherSweatShirt).toHaveLength(1);
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
*/
