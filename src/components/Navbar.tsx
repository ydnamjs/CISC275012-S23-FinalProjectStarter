import React, { useState } from "react";
import "./Navbar.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function NavBar() {
    const [isAdmin, setPriv] = useState("User");
    function updatePriv(event: React.ChangeEvent<HTMLSelectElement>) {
        setPriv(event.target.value);
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="/" className="title">
                        E F F O R T L E S S
                    </Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link>
                            <Link to="/men">Shop Clothing</Link>
                        </Nav.Link>
                    </Nav>
                    <Form className="search">
                        <Form.Label className="role-select">
                            Role select
                        </Form.Label>
                        <Form.Select
                            className="search"
                            value={isAdmin}
                            onChange={updatePriv}
                        >
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                        </Form.Select>
                    </Form>
                    This user is a {isAdmin}
                    <Nav.Link>
                        <Link to="/cart">
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
                        </Link>
                    </Nav.Link>
                </Container>
            </Navbar>
        </div>
    );
}
export default NavBar;
