import React, { useState } from "react";
import "./Navbar.css";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function NavBar() {
    const [count, setCount] = useState(0);
    return (
        <Router>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>E F F O R T L E S S</Navbar.Brand>
                    <Nav>
                        <NavDropdown
                            title="Shop Men"
                            className="gender-dropdown"
                        >
                            <p className="product-dropdown">Products</p>
                            <LinkContainer to="/menshorts">
                                <Nav.Link className="clothing-cat">
                                    Shorts
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/menpants">
                                <Nav.Link className="clothing-cat">
                                    Pants
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/menaccessories">
                                <Nav.Link className="clothing-cat">
                                    Accessories
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/menouter">
                                <Nav.Link className="clothing-cat">
                                    Outerwear
                                </Nav.Link>
                            </LinkContainer>
                        </NavDropdown>
                        <NavDropdown title="Shop Women">
                            <p className="product-dropdown">Products</p>
                            <Nav.Link
                                className="clothing-cat"
                                as={Link}
                                eventKey="/wtops"
                                to="/wtops"
                            >
                                Tops
                            </Nav.Link>
                            <Nav.Link
                                className="clothing-cat"
                                as={Link}
                                eventKey="/wleggings"
                                to="/wleggings"
                            >
                                Leggings
                            </Nav.Link>
                            <Nav.Link
                                className="clothing-cat"
                                as={Link}
                                eventKey="/wpants"
                                to="/wpants"
                            >
                                Pants
                            </Nav.Link>
                            <Nav.Link
                                className="clothing-cat"
                                as={Link}
                                eventKey="/wacc"
                                to="/wacc"
                            >
                                Accessories
                            </Nav.Link>
                            <Nav.Link
                                className="clothing-cat"
                                as={Link}
                                eventKey="/wouter"
                                to="/wouter"
                            >
                                Outerwear
                            </Nav.Link>
                        </NavDropdown>
                    </Nav>
                    <button className="cart-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            {" "}
                            <path
                                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                                fill="white"
                            ></path>{" "}
                        </svg>
                    </button>
                    <p className="cart-quantity">{count}</p>
                </Navbar>
            </div>
        </Router>
    );
}
export default NavBar;
