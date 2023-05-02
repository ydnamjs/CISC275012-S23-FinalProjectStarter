import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import Checkout from "./pages/Checkout";

function App() {
    return (
        <>
            <Navbar />
            <Container>
                <Routes>
                    <Route path="/homepage" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
