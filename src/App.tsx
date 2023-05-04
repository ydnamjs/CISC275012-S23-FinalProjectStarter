import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import CartDisplay from "./CartDisplay";
import Admin from "./Admin";

function App(): JSX.Element {
    return (
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
                <Route path="/cart" element={<CartDisplay />}></Route>
                <Route path="/login" element={<Home />}></Route>
                <Route path="/admin" element={<Admin />}></Route>
            </Routes>
        </>
    );
}

export default App;
