import React from "react";
import "./Main.css";
import runners from "../assets/runners.png";

const FrontPage = () => {
    return (
        <div className="image1">
            <img src={runners}></img>
            <h1 className="text">E F F O R T L E S S</h1>
            <p className="description">Redefining Athletic Wear</p>
            <a href="http://google.com" className="shop-now">
                Shop Now
            </a>
            <a href="http://google.com" className="shop-now">
                Shop Now
            </a>
        </div>
    );
};
export default FrontPage;
