import React from "react";
import "./Main.css";
import runners from "../assets/runners.png";
import { Button } from "react-bootstrap";

const FrontPage = () => {
    return (
        <div className="image1">
            <img src={runners}></img>
            <h1 className="text">EFFORTLESS</h1>
            <p className="description">Redefining Athletic Wear</p>
        </div>
    );
};
export default FrontPage;
