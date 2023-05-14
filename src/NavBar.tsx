import React from "react";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import { useState } from "react";
import "./App.css";
import logo from "./images/logo.png";
import "./Home.css";
import { app } from "./firebase-config";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartDisplay from "./CartDisplay";
import RegisterForm from "./Components/Common/RegisterForm";
import LoginForm from "./Components/Common/LoginForm";
import { getDatabase, ref, set, get } from "@firebase/database";

function NavBar(): JSX.Element {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [address, setAddress] = useState("");
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

    const adminList = ["skraus@udel.edu", "gmelton@udel.edu"];
    const database = getDatabase();
    function writeUserData(
        userId: string,
        name: string,
        email: string,
        password: string,
        address: string
    ) {
        set(ref(database, "users/" + userId), {
            name: name,
            email: email,
            password: password,
            address: address
        });
    }
    function displayUser(id: string): void {
        if (id) {
            const usernameRef = ref(database, "users/" + id + "/name");
            get(usernameRef)
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        setUsername(snapshot.val());
                    } else {
                        console.log("No data");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            setUsername("");
        }
    }
    const handleLogout = () => {
        const authentication = getAuth(app);
        authentication.signOut().then(() => {
            sessionStorage.removeItem("Auth Token");
            sessionStorage.clear();
            navigate("/");
            loggedIn();
            displayUser("");
        });
        isAdmin(email);
    };
    function loggedIn(): void {
        setLoginVisible(!loginVisible);
        setRegisterVisible(!registerVisible);
        setLogoutVisible(!logoutVisible);
    }
    function loggedInText(data: string): string {
        if (loginVisible && data) {
            return "Welcome " + data;
        } else {
            return "Please Log in";
        }
    }
    function loggedInAdmin(email2: string): boolean {
        const authentication = getAuth(app);
        if (loginVisible && authentication.currentUser && isAdmin(email2)) {
            return true;
        } else {
            return false;
        }
    }
    function isAdmin(email2: string): boolean {
        const admins = adminList.filter(
            (admin: string): boolean => admin === email2
        );
        if (admins.length !== 0) {
            return true;
        } else {
            return false;
        }
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
                    isAdmin(email);
                    displayUser(response.user.uid);
                })
                .catch((error) => {
                    if (error.code === "auth/wrong-password") {
                        toast.error("Invalid Password");
                    }
                    if (error.code === "auth/user-not-found") {
                        toast.error("Invalid Email");
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
                    writeUserData(
                        response.user.uid,
                        username,
                        email,
                        password,
                        address
                    );
                })
                .catch((error) => {
                    if (error.code === "auth/invalid-email") {
                        toast.error("Invalid Email");
                    }
                    if (error.code === "auth/weak-password") {
                        toast.error("Use a Stronger Password");
                    }
                    if (error.code === "auth/email-already-in-use") {
                        toast.error("Email Already in Use");
                    }
                });
        }
    };
    return (
        <>
            <div className="App">
                <div id="logo">
                    <img src={logo} height={250} width={350} alt={"logo"}></img>
                </div>
                <header className="App-header">
                    <div>{loggedInText(username)}</div>
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
                                    <Link
                                        to="/login"
                                        hidden={loginVisible}
                                        data-testid="login-page"
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/admin"
                                        hidden={!loggedInAdmin(email)}
                                        role="admin-link"
                                    >
                                        Admin
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
                                shirtCart1={shirtCart1}
                                shirtCart2={shirtCart2}
                                shirtCart3={shirtCart3}
                                shirtCart4={shirtCart4}
                                shirtCart5={shirtCart5}
                                shirtCart6={shirtCart6}
                                setShirtCart1={setShirtCart1}
                                setShirtCart3={setShirtCart2}
                                setShirtCart2={setShirtCart3}
                                setShirtCart4={setShirtCart4}
                                setShirtCart5={setShirtCart5}
                                setShirtCart6={setShirtCart6}
                                setStock1={setShirtOneStock}
                                setStock2={setShirtTwoStock}
                                setStock3={setShirtThreeStock}
                                setStock4={setShirtFourStock}
                                setStock5={setShirtFiveStock}
                                setStock6={setShirtSixStock}
                                sweatCart1={sweatCart1}
                                sweatCart2={sweatCart3}
                                sweatCart3={sweatCart3}
                                sweatCart4={sweatCart4}
                                sweatCart5={sweatCart5}
                                sweatCart6={sweatCart6}
                                sweatSetCart1={sweatSetCart1}
                                sweatSetCart2={sweatSetCart2}
                                sweatSetCart3={sweatSetCart3}
                                sweatSetCart4={sweatSetCart4}
                                sweatSetCart5={sweatSetCart5}
                                sweatSetCart6={sweatSetCart6}
                                sweatSetStock1={setSweatshirtOneStock}
                                sweatSetStock2={setSweatshirtTwoStock}
                                sweatSetStock3={setShirtThreeStock}
                                sweatSetStock4={setSweatshirtFourStock}
                                sweatSetStock5={setShirtFiveStock}
                                sweatSetStock6={setSweatshirtSixStock}
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
                            <RegisterForm
                                title="Register"
                                setEmail={setEmail}
                                setPassword={setPassword}
                                setUsername={setUsername}
                                setAddress={setAddress}
                                handleAction={() => handleAction(2)}
                            />
                        }
                    ></Route>
                    <Route
                        path="/login"
                        element={
                            <LoginForm
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
