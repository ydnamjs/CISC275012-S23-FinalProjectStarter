/* eslint-disable no-extra-parens */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { Button, Center } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Registration = () => {
    const userRef = React.useRef<HTMLInputElement>(null);
    const errRef = React.useRef<HTMLInputElement>(null);

    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

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
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd, matchPwd]);

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
                    <Navbar />
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
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                            />
                            <p
                                id="uidnote"
                                className={
                                    userFocus && user && !validName
                                        ? "instructions"
                                        : "hide"
                                }
                            >
                                4 to 24 characters.
                                <br /> Must begin with a letter.
                                <br />
                                Letters, numbers, underscores, hyphens allowed.
                            </p>

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
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)}
                            />
                            <p
                                id="pwdnote"
                                className={
                                    pwdFocus && !validPwd
                                        ? "instructions"
                                        : "hide"
                                }
                            >
                                8 to 24 characters.
                                <br /> Must include uppercase and lowercase
                                letters, a number and a special character.
                                <br />
                                Allowed special characters: !, @, #, $, %
                            </p>

                            <label htmlFor="confirm_pwd">
                                Confirm Password:{" "}
                                <span
                                    className={
                                        validMatch && matchPwd
                                            ? "valid"
                                            : "hide"
                                    }
                                >
                                    Valid
                                </span>
                                <span
                                    className={
                                        validMatch || !matchPwd
                                            ? "hide"
                                            : "invalid"
                                    }
                                >
                                    Invalid
                                </span>
                            </label>
                            <input
                                type="password"
                                id="confirm_pwd"
                                onChange={(e) => setMatchPwd(e.target.value)}
                                required
                                aria-invalid={validMatch ? "false" : "true"}
                                aria-describedby="confirmnote"
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}
                            />
                            <p
                                id="confirmnote"
                                className={
                                    matchFocus && !validMatch
                                        ? "instructions"
                                        : "hide"
                                }
                            >
                                Must match the first password.
                            </p>

                            <button
                                disabled={
                                    !validName || !validPwd || !validMatch
                                        ? true
                                        : false
                                }
                            >
                                Sign UP
                            </button>
                        </form>
                        <p>
                            Already registered?
                            <br />
                            <span className="line">
                                <Link to="/login">
                                    <Button>Login</Button>
                                </Link>
                            </span>
                        </p>
                    </Center>
                </section>
            )}
        </>
    );
};
export default Registration;
