import React from "react";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import CartDisplay from "./CartDisplay";
import Admin from "./Admin";
import { useState } from "react";
import "./App.css";
import Form from "./Components/Common/Form";
import { app } from "./firebase-config";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NavBar(): JSX.Element {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loginVisible, setLoginVisible] = useState(false);
    const [registerVisible, setRegisterVisible] = useState(false);
    const [logoutVisible, setLogoutVisible] = useState(true);
    const [shirtOneStock, setShirtOneStock] = useState(2);
    const [shirtTwoStock, setShirtTwoStock] = useState(2);
    const [shirtThreeStock, setShirtThreeStock] = useState(2);
    const [shirtFourStock, setShirtFourStock] = useState(2);
    const [shirtFiveStock, setShirtFiveStock] = useState(2);
    const [shirtSixStock, setShirtSixStock] = useState(2);
    const [sweatshirtOneStock, setSweatshirtOneStock] = useState(2);
    const [sweatshirtTwoStock, setSweatshirtTwoStock] = useState(2);
    const [sweatshirtThreeStock, setSweatshirtThreeStock] = useState(2);
    const [sweatshirtFourStock, setSweatshirtFourStock] = useState(2);
    const [sweatshirtFiveStock, setSweatshirtFiveStock] = useState(2);
    const [sweatshirtSixStock, setSweatshirtSixStock] = useState(2);
    const handleLogout = () => {
        sessionStorage.removeItem("Auth Token");
        navigate("/");
        loggedIn();
    };
    function loggedIn(): void {
        setLoginVisible(!loginVisible);
        setRegisterVisible(!registerVisible);
        setLogoutVisible(!logoutVisible);
    }
    const handleAction = (id: number) => {
        const authentication = getAuth(app);
        if (id === 1) {
            signInWithEmailAndPassword(authentication, email, password)
                .then((response) => {
                    navigate("/");
                    sessionStorage.setItem(
                        "Auth Token",
                        response.user.refreshToken
                    );
                    loggedIn();
                })
                .catch((error) => {
                    console.log(error.code);
                    if (error.code === "auth/wrong-password") {
                        toast.error("Please check the Password");
                    }
                    if (error.code === "auth/user-not-found") {
                        toast.error("Please check the Email");
                    }
                });
        }
        if (id === 2) {
            createUserWithEmailAndPassword(authentication, email, password)
                .then((response) => {
                    navigate("/");
                    sessionStorage.setItem(
                        "Auth Token",
                        response.user.refreshToken
                    );
                })
                .catch((error) => {
                    if (error.code === "auth/email-already-in-use") {
                        toast.error("Email Already in Use");
                    }
                });
        }
    };
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <div>Welcome </div>
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
                                    <Link
                                        to="/register"
                                        hidden={registerVisible}
                                    >
                                        Register
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/login" hidden={loginVisible}>
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        onClick={handleLogout}
                                        hidden={logoutVisible}
                                    >
                                        Logout
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin">Admin</Link>
                                </li>
                            </ul>
                        </nav>
                        <ToastContainer />
                    </>
                </header>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                stockOne={shirtOneStock}
                                stockTwo={shirtTwoStock}
                                stockThree={shirtThreeStock}
                                stockFour={shirtFourStock}
                                stockFive={shirtFiveStock}
                                stockSix={shirtSixStock}
                                sweatStockOne={sweatshirtOneStock}
                                sweatStockTwo={sweatshirtTwoStock}
                                sweatStockThree={sweatshirtThreeStock}
                                sweatStockFour={sweatshirtFourStock}
                                sweatStockFive={sweatshirtFiveStock}
                                sweatStockSix={sweatshirtSixStock}
                            />
                        }
                    ></Route>
                    <Route path="/cart" element={<CartDisplay />}></Route>
                    <Route
                        path="/register"
                        element={
                            <Form
                                title="Register"
                                setEmail={setEmail}
                                setPassword={setPassword}
                                handleAction={() => handleAction(2)}
                            />
                        }
                    ></Route>
                    <Route
                        path="/login"
                        element={
                            <Form
                                title="Login"
                                setEmail={setEmail}
                                setPassword={setPassword}
                                handleAction={() => handleAction(1)}
                            />
                        }
                    ></Route>
                    <Route
                        path="/admin"
                        element={
                            <Admin
                                stockOne={shirtOneStock}
                                setStockOne={setShirtOneStock}
                                stockTwo={shirtTwoStock}
                                setStockTwo={setShirtTwoStock}
                                stockThree={shirtThreeStock}
                                setStockThree={setShirtThreeStock}
                                stockFour={shirtFourStock}
                                setStockFour={setShirtFourStock}
                                stockFive={shirtFiveStock}
                                setStockFive={setShirtFiveStock}
                                stockSix={shirtSixStock}
                                setStockSix={setShirtSixStock}
                                sweatStockOne={sweatshirtOneStock}
                                sweatSetStockOne={setSweatshirtOneStock}
                                sweatStockTwo={sweatshirtTwoStock}
                                sweatSetStockTwo={setSweatshirtTwoStock}
                                sweatStockThree={sweatshirtThreeStock}
                                sweatSetStockThree={setSweatshirtThreeStock}
                                sweatStockFour={sweatshirtFourStock}
                                sweatSetStockFour={setSweatshirtFourStock}
                                sweatStockFive={sweatshirtFiveStock}
                                sweatSetStockFive={setSweatshirtFiveStock}
                                sweatStockSix={sweatshirtSixStock}
                                sweatSetStockSix={setSweatshirtSixStock}
                            />
                        }
                    ></Route>
                </Routes>
            </div>
        </>
    );
}
export default NavBar;
