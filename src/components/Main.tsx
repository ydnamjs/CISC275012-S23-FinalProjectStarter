import React from "react";
import "./Main.css";
import runners from "../assets/runners.png";
import NavBar from "../components/Navbar";

const FrontPage = () => {
    return (
        <div className="image1">
            <NavBar></NavBar>
            <img src={runners}></img>
            <h1 className="text">E F F O R T L E S S</h1>
            <p className="description">Redefining Athletic Wear</p>
            <form
                className="shop-now"
                method="GET"
                action="https://www.google.com"
            >
                <input type="submit" value="Shop Now" />
            </form>
        </div>
    );
};
export default FrontPage;
