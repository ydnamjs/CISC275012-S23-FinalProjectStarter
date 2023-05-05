import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import CartDisplay from "./CartDisplay";
import Admin from "./Admin";
import { FilterClothes } from "./FilterClothes";

function App(): JSX.Element {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/cart">Cart</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/admin">Admin</Link>
                                </li>
                            </ul>
                        </nav>
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route
                                path="/cart"
                                element={<CartDisplay />}
                            ></Route>
                            <Route path="/login" element={<Home />}></Route>
                            <Route path="/admin" element={<Admin />}></Route>
                        </Routes>
                    </>
                    <div>
                        <Container>
                            <Row>
                                <Col>
                                    <p>logo</p>
                                </Col>
                                <Col>
                                    <Button>Login</Button>
                                </Col>
                                <Col>
                                    <Button>Checkout</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </header>
                <div>
                    Filter Items: <FilterClothes></FilterClothes>
                </div>
            </div>
        </>
    );
}

export default App;
