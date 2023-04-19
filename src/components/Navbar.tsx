import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>E F F O R T L E S S</Navbar.Brand>

                <Nav>
                    <NavDropdown title="Shop Men">
                        <p className="product-dropdown">Top Sellers</p>
                        <a
                            className="clothing-cat"
                            href="https://www.youngla.com/products/435-tee"
                        >
                            T-Shirt and Tops
                        </a>
                    </NavDropdown>

                    <NavDropdown title="Shop Women">
                        <NavDropdown.Item href="women/tops">
                            T-Shirt and Tops
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </div>
    );
}
export default NavBar;
