import React from "react";
import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <NavbarBS sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav>
                    <Nav.Link to="/homepage" as={NavLink}>
                        {" "}
                        Home
                    </Nav.Link>
                    <Nav.Link to="/cart" as={NavLink}>
                        {" "}
                        Cart
                    </Nav.Link>
                    <Nav.Link to="/login" as={NavLink}>
                        {" "}
                        Login
                    </Nav.Link>
                    <Nav.Link to="/admin" as={NavLink}>
                        {" "}
                        Admin
                    </Nav.Link>
                </Nav>
                <Button>
                    Checkout<Nav.Link to="/checkout" as={NavLink}></Nav.Link>
                </Button>
            </Container>
        </NavbarBS>
    );
}

export default Navbar;
