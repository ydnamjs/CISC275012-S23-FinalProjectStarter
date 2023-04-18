import React from "react";
import "./Main.css";
import runners from "../assets/runners.png";

const FrontPage = () => {
    return (
        <div className="image1">
            <button type="button" className="shop-now">
                Shop Now
            </button>
            <img src={runners}></img>
            <h1 className="text">EFFORTLESS</h1>
            <p className="description">Redefining Athletic Wear</p>
        </div>
    );
};
export default FrontPage;
