/* eslint-disable no-extra-parens */
import React, { useState, useEffect } from "react";
import NavBar from "../Navbar";
import { Button, Center } from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Login = () => {
    const userRef = React.useRef<HTMLInputElement>(null);
    const errRef = React.useRef<HTMLInputElement>(null);

    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false);

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (userRef.current != null) {
            userRef.current.focus();
        }
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
    }, [pwd]);

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        localStorage.setItem("username", user);
        localStorage.setItem("password", pwd);
        setSuccess(true);
    };

    return (
        <>
            {success ? (
                <section>
                    <Navigate to="/" />
                </section>
            ) : (
                <section className="background">
                    <p
                        ref={errRef}
                        className={errMsg ? "errmsg" : "offscreen"}
                        aria-live="assertive"
                    >
                        {errMsg}
                    </p>
                    <NavBar />
                    <Center>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username">
                                Username:{" "}
                                <span className={validName ? "valid" : "hide"}>
                                    Valid
                                </span>
                                <span
                                    className={
                                        validName || !user ? "hide" : "invalid"
                                    }
                                >
                                    Invalid
                                </span>
                            </label>
                            <input
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                required
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby="uidnote"
                            />

                            <label htmlFor="password">
                                Password:{" "}
                                <span className={validPwd ? "valid" : "hide"}>
                                    Valid
                                </span>
                                <span
                                    className={
                                        validPwd || !pwd ? "hide" : "invalid"
                                    }
                                >
                                    Invalid
                                </span>
                            </label>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                required
                                aria-invalid={validPwd ? "false" : "true"}
                                aria-describedby="pwdnote"
                            />
                            <button
                                disabled={
                                    !validName || !validPwd ? true : false
                                }
                            >
                                Login
                            </button>
                        </form>
                        <p>
                            Not registered yet?
                            <br />
                            <span className="line">
                                <Link to="/register">
                                    <Button>Register</Button>
                                </Link>
                            </span>
                        </p>
                    </Center>
                </section>
            )}
        </>
    );
};
export default Login;
