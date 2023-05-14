import React, { Dispatch, SetStateAction } from "react";
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
    sweatStockSix,
    shirtCart1,
    shirtCart2,
    shirtCart3,
    shirtCart4,
    shirtCart5,
    shirtCart6,
    setShirtCart1,
    setShirtCart2,
    setShirtCart3,
    setShirtCart4,
    setShirtCart5,
    setShirtCart6,
    setStock1,
    setStock2,
    setStock3,
    setStock4,
    setStock5,
    setStock6,
    sweatCart1,
    sweatCart2,
    sweatCart3,
    sweatCart4,
    sweatCart5,
    sweatCart6,
    sweatSetCart1,
    sweatSetCart2,
    sweatSetCart3,
    sweatSetCart4,
    sweatSetCart5,
    sweatSetCart6,
    sweatSetStock1,
    sweatSetStock2,
    sweatSetStock3,
    sweatSetStock4,
    sweatSetStock5,
    sweatSetStock6
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
    shirtCart1: number;
    shirtCart2: number;
    shirtCart3: number;
    shirtCart4: number;
    shirtCart5: number;
    shirtCart6: number;
    setShirtCart1: Dispatch<SetStateAction<number>>;
    setShirtCart2: Dispatch<SetStateAction<number>>;
    setShirtCart3: Dispatch<SetStateAction<number>>;
    setShirtCart4: Dispatch<SetStateAction<number>>;
    setShirtCart5: Dispatch<SetStateAction<number>>;
    setShirtCart6: Dispatch<SetStateAction<number>>;
    setStock1: Dispatch<SetStateAction<number>>;
    setStock2: Dispatch<SetStateAction<number>>;
    setStock3: Dispatch<SetStateAction<number>>;
    setStock4: Dispatch<SetStateAction<number>>;
    setStock5: Dispatch<SetStateAction<number>>;
    setStock6: Dispatch<SetStateAction<number>>;
    sweatCart1: number;
    sweatSetCart1: Dispatch<SetStateAction<number>>;
    sweatCart2: number;
    sweatSetCart2: Dispatch<SetStateAction<number>>;
    sweatCart3: number;
    sweatSetCart3: Dispatch<SetStateAction<number>>;
    sweatCart4: number;
    sweatSetCart4: Dispatch<SetStateAction<number>>;
    sweatCart5: number;
    sweatSetCart5: Dispatch<SetStateAction<number>>;
    sweatCart6: number;
    sweatSetCart6: Dispatch<SetStateAction<number>>;
    sweatSetStock1: Dispatch<SetStateAction<number>>;
    sweatSetStock2: Dispatch<SetStateAction<number>>;
    sweatSetStock3: Dispatch<SetStateAction<number>>;
    sweatSetStock4: Dispatch<SetStateAction<number>>;
    sweatSetStock5: Dispatch<SetStateAction<number>>;
    sweatSetStock6: Dispatch<SetStateAction<number>>;
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
                    shirtCart1={shirtCart1}
                    shirtCart2={shirtCart2}
                    shirtCart3={shirtCart3}
                    shirtCart4={shirtCart4}
                    shirtCart5={shirtCart5}
                    shirtCart6={shirtCart6}
                    setShirtCart1={setShirtCart1}
                    setShirtCart3={setShirtCart2}
                    setShirtCart2={setShirtCart3}
                    setShirtCart4={setShirtCart4}
                    setShirtCart5={setShirtCart5}
                    setShirtCart6={setShirtCart6}
                    setStock1={setStock1}
                    setStock2={setStock2}
                    setStock3={setStock3}
                    setStock4={setStock4}
                    setStock5={setStock5}
                    setStock6={setStock6}
                    sweatCart1={sweatCart1}
                    sweatCart2={sweatCart3}
                    sweatCart3={sweatCart3}
                    sweatCart4={sweatCart4}
                    sweatCart5={sweatCart5}
                    sweatCart6={sweatCart6}
                    sweatSetCart1={sweatSetCart1}
                    sweatSetCart2={sweatSetCart2}
                    sweatSetCart3={sweatSetCart3}
                    sweatSetCart4={sweatSetCart4}
                    sweatSetCart5={sweatSetCart5}
                    sweatSetCart6={sweatSetCart6}
                    sweatSetStock1={sweatSetStock1}
                    sweatSetStock2={sweatSetStock2}
                    sweatSetStock3={sweatSetStock3}
                    sweatSetStock4={sweatSetStock4}
                    sweatSetStock5={sweatSetStock5}
                    sweatSetStock6={sweatSetStock6}
                ></FilterClothes>
            </div>
        </div>
    );
}

export default Home;
