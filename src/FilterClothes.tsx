import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ShirtDisplays } from "./ShirtDisplays";
import { SweatShirtDisplays } from "./SweatShirtDisplays";
import { ColorFilter } from "./ColorFilter";

export function FilterClothes({
    stockOne,
    stockTwo,
    stockThree,
    stockFour,
    stockFive,
    stockSix,
    sweatStockOne,
    sweatStockTwo,
    sweatStockThree,
    sweatStockFour,
    sweatStockFive,
    sweatStockSix
}: {
    stockOne: number;
    stockTwo: number;
    stockThree: number;
    stockFour: number;
    stockFive: number;
    stockSix: number;
    sweatStockOne: number;
    sweatStockTwo: number;
    sweatStockThree: number;
    sweatStockFour: number;
    sweatStockFive: number;
    sweatStockSix: number;
}): JSX.Element {
    const [Shirtvisible, setShirtVisible] = useState<boolean>(true);
    const [SweatShirtvisible, setSweatShirtVisible] = useState<boolean>(true);
    const [color, setColor] = useState<string>("all");

    function flipShirtVisbility(): void {
        setShirtVisible(!Shirtvisible);
    }

    function flipSweatShirtVisbility(): void {
        setSweatShirtVisible(!SweatShirtvisible);
    }

    return (
        <div>
            {<ColorFilter color={color} setColor={setColor}></ColorFilter>}
            <Button onClick={flipSweatShirtVisbility}>SweatShirt</Button>
            <Button onClick={flipShirtVisbility}>Shirts</Button>
            {Shirtvisible && (
                <SweatShirtDisplays
                    color={color}
                    sweatStockOne={sweatStockOne}
                    sweatStockTwo={sweatStockTwo}
                    sweatStockThree={sweatStockThree}
                    sweatStockFour={sweatStockFour}
                    sweatStockFive={sweatStockFive}
                    sweatStockSix={sweatStockSix}
                ></SweatShirtDisplays>
            )}
            {SweatShirtvisible && (
                <ShirtDisplays
                    color={color}
                    stockOne={stockOne}
                    stockTwo={stockTwo}
                    stockThree={stockThree}
                    stockFour={stockFour}
                    stockFive={stockFive}
                    stockSix={stockSix}
                ></ShirtDisplays>
            )}
        </div>
    );
}
