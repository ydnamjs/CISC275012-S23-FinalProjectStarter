import React, { useState } from "react";
//import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
//import Dropdown from "./Dropdown";
import { Nav, Navbar } from "react-bootstrap";

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>E F F O R T L E S S</Navbar.Brand>

                <Nav>
                    <Nav.Link href="products">Shop Men</Nav.Link>
                    <Nav.Link href="products">Shop Women</Nav.Link>
                    <Nav.Link href="products">Best Sellers</Nav.Link>
                    <Nav.Link href="products">Top Rated</Nav.Link>
                    <Nav.Link href="products">Accesories</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}
export default NavBar;
