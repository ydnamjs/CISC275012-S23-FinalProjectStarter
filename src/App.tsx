import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import CartDisplay from "./CartDisplay";
import Admin from "./Admin";
import { FilterClothes } from "./FilterClothes";
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

function App(): JSX.Element {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loginVisible, setLoginVisible] = useState(false);
    const [registerVisible, setRegisterVisible] = useState(false);
    const [logoutVisible, setLogoutVisible] = useState(true);
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
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route
                                path="/cart"
                                element={<CartDisplay />}
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
                            <Route path="/admin" element={<Admin />}></Route>
                        </Routes>
                    </>
                    <div>Welcome </div>
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
