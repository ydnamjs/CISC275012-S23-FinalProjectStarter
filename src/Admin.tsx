import React, { Dispatch, SetStateAction } from "react";
import StockEditor from "./StockEditor";
import OrderViewer from "./OrderViewer";
import { number } from "yup";
import { useState } from "react";

function Admin({
    stockOne,
    setStockOne,
    stockTwo,
    setStockTwo,
    stockThree,
    setStockThree,
    stockFour,
    setStockFour,
    stockFive,
    setStockFive,
    stockSix,
    setStockSix,
    sweatStockOne,
    sweatSetStockOne,
    sweatStockTwo,
    sweatSetStockTwo,
    sweatStockThree,
    sweatSetStockThree,
    sweatStockFour,
    sweatSetStockFour,
    sweatStockFive,
    sweatSetStockFive,
    sweatStockSix,
    sweatSetStockSix
}: {
    stockOne: number;
    setStockOne: Dispatch<SetStateAction<number>>;
    stockTwo: number;
    setStockTwo: Dispatch<SetStateAction<number>>;
    stockThree: number;
    setStockThree: Dispatch<SetStateAction<number>>;
    stockFour: number;
    setStockFour: Dispatch<SetStateAction<number>>;
    stockFive: number;
    setStockFive: Dispatch<SetStateAction<number>>;
    stockSix: number;
    setStockSix: Dispatch<SetStateAction<number>>;
    sweatStockOne: number;
    sweatSetStockOne: Dispatch<SetStateAction<number>>;
    sweatStockTwo: number;
    sweatSetStockTwo: Dispatch<SetStateAction<number>>;
    sweatStockThree: number;
    sweatSetStockThree: Dispatch<SetStateAction<number>>;
    sweatStockFour: number;
    sweatSetStockFour: Dispatch<SetStateAction<number>>;
    sweatStockFive: number;
    sweatSetStockFive: Dispatch<SetStateAction<number>>;
    sweatStockSix: number;
    sweatSetStockSix: Dispatch<SetStateAction<number>>;
}): JSX.Element {
    return (
        <>
            <div>
                <header>Orders</header>
                <OrderViewer />
            </div>
            <div>
                <header>Stock</header>
                <StockEditor
                    stock1={stockOne}
                    setStock1={setStockOne}
                    stock2={stockTwo}
                    setStock2={setStockTwo}
                    stock3={stockThree}
                    setStock3={setStockThree}
                    stock4={stockFour}
                    setStock4={setStockFour}
                    stock5={stockFive}
                    setStock5={setStockFive}
                    stock6={stockSix}
                    setStock6={setStockSix}
                    sweatStock1={sweatStockOne}
                    sweatSetStock1={sweatSetStockOne}
                    sweatStock2={sweatStockTwo}
                    sweatSetStock2={sweatSetStockTwo}
                    sweatStock3={sweatStockThree}
                    sweatSetStock3={sweatSetStockThree}
                    sweatStock4={sweatStockFour}
                    sweatSetStock4={sweatSetStockFour}
                    sweatStock5={sweatStockFive}
                    sweatSetStock5={sweatSetStockFive}
                    sweatStock6={sweatStockSix}
                    sweatSetStock6={sweatSetStockSix}
                />
            </div>
        </>
    );
}

export default Admin;
