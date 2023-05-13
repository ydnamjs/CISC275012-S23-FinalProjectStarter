import React from "react";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./Home";
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
import CartDisplay from "./CartDisplay";

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
    const [shirtCart1, setShirtCart1] = useState(0);
    const [shirtCart2, setShirtCart2] = useState(0);
    const [shirtCart3, setShirtCart3] = useState(0);
    const [shirtCart4, setShirtCart4] = useState(0);
    const [shirtCart5, setShirtCart5] = useState(0);
    const [shirtCart6, setShirtCart6] = useState(0);
    const [sweatCart1, sweatSetCart1] = useState(0);
    const [sweatCart2, sweatSetCart2] = useState(0);
    const [sweatCart3, sweatSetCart3] = useState(0);
    const [sweatCart4, sweatSetCart4] = useState(0);
    const [sweatCart5, sweatSetCart5] = useState(0);
    const [sweatCart6, sweatSetCart6] = useState(0);

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
                    <Route
                        path="/cart"
                        element={
                            <CartDisplay
                                shirtCart1={shirtCart1}
                                setShirtCart1={setShirtCart1}
                                shirtCart2={shirtCart2}
                                setShirtCart2={setShirtCart2}
                                shirtCart3={shirtCart3}
                                setShirtCart3={setShirtCart3}
                                shirtCart4={shirtCart4}
                                setShirtCart4={setShirtCart4}
                                shirtCart5={shirtCart5}
                                setShirtCart5={setShirtCart5}
                                shirtCart6={shirtCart6}
                                setShirtCart6={setShirtCart6}
                                sweatCart1={sweatCart1}
                                sweatSetCart1={sweatSetCart1}
                                sweatCart2={sweatCart2}
                                sweatSetCart2={sweatSetCart2}
                                sweatCart3={sweatCart3}
                                sweatSetCart3={sweatSetCart3}
                                sweatCart4={sweatCart4}
                                sweatSetCart4={sweatSetCart4}
                                sweatCart5={sweatCart5}
                                sweatSetCart5={sweatSetCart5}
                                sweatCart6={sweatCart6}
                                sweatSetCart6={sweatSetCart6}
                                stock1={shirtOneStock}
                                setStock1={setShirtOneStock}
                                stock2={shirtTwoStock}
                                setStock2={setShirtTwoStock}
                                stock3={shirtThreeStock}
                                setStock3={setShirtThreeStock}
                                stock4={shirtFourStock}
                                setStock4={setShirtFourStock}
                                stock5={shirtFiveStock}
                                setStock5={setShirtFiveStock}
                                stock6={shirtSixStock}
                                setStock6={setShirtSixStock}
                                sweatStock1={sweatshirtOneStock}
                                sweatSetStock1={setSweatshirtOneStock}
                                sweatStock2={sweatshirtTwoStock}
                                sweatSetStock2={setSweatshirtTwoStock}
                                sweatStock3={sweatshirtThreeStock}
                                sweatSetStock3={setSweatshirtThreeStock}
                                sweatStock4={sweatshirtFourStock}
                                sweatSetStock4={setSweatshirtFourStock}
                                sweatStock5={sweatshirtFiveStock}
                                sweatSetStock5={setSweatshirtFiveStock}
                                sweatStock6={sweatshirtSixStock}
                                sweatSetStock6={setSweatshirtSixStock}
                            />
                        }
                    ></Route>
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
