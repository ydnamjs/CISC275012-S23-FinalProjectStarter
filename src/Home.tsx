import React from "react";
//import { Button } from "react-bootstrap";
import "./App.css";
//import logo from "./images/logo.png";
import "./Home.css";
import { FilterClothes } from "./FilterClothes";

export function Home({
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
    return (
        <div className="Home">
            {/* <div id="logo">
                <img src={logo}></img>
            </div> */}
            <div>
                Filter Items:{" "}
                <FilterClothes
                    stockOne={stockOne}
                    stockTwo={stockTwo}
                    stockThree={stockThree}
                    stockFour={stockFour}
                    stockFive={stockFive}
                    stockSix={stockSix}
                    sweatStockOne={sweatStockOne}
                    sweatStockTwo={sweatStockTwo}
                    sweatStockThree={sweatStockThree}
                    sweatStockFour={sweatStockFour}
                    sweatStockFive={sweatStockFive}
                    sweatStockSix={sweatStockSix}
                ></FilterClothes>
            </div>
        </div>
    );
}

export default Home;
