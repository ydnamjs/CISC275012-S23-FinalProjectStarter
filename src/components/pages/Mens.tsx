import React from "react";
import NavBar from "../Navbar";
import "../pages/Mens.css";
import UDshirt from "../../assets/ud_shirt.png";
import Product from "../Product";

const Mens = () => {
    return (
        <div className="background">
            <NavBar />
            <img className="product-image" src={UDshirt}></img>
            <h1 className="background">THIS IS MENS PAGE</h1>
            Mens clothing Bello There
        </div>
    );
};
export default Mens;
