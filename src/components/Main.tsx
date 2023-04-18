import React from "react";
import "./Main.css";
import runners from "../assets/runners.png";

const FrontPage = () => {
    return (
        <div className="image1">
            <img src={runners}></img>
            <div className="text">EFFORTLESS</div>
            <p className="description">Redefining Athletic Wear</p>
        </div>
    );
};
export default FrontPage;
