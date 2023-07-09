import React from "react";
import "./App.css";
//import { Button, Card } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <>
            <div className="background">
                <div
                    className="clay"
                    style={{
                        position: "relative",
                        top: "40px",
                        left: "40px"
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            top: "10px",
                            left: "20px",
                            whiteSpace: "pre-wrap",
                            color: "white"
                        }}
                    >
                        <h3>Hey!</h3>
                        My name is Philip Stoyanov. I am an aspiring Web
                        Developer. Currently I am a junior attending the
                        University of Delaware. I am 20 years old. I live in
                        Wilmington Delaware. I love music, sports. I like to
                        draw, I like to travel. I like to learn about new things
                        and talk <br />
                        to new people. I come from Bulgarian descent. Both of my
                        parents were born and <br />
                        raised there. I have friends and grandparents that I
                        still go visit every 2 years or so
                    </div>
                </div>
                <div
                    className="happy-green"
                    style={{
                        position: "relative",
                        top: "400px",
                        left: "-500px"
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            top: "10px",
                            left: "20px",
                            whiteSpace: "pre-wrap",
                            color: "white"
                        }}
                    >
                        <h3>Motivation</h3>I really did not know what I wanted
                        to do until my Intro to Software Engineering class. Sure
                        I was following along in class, learning a lot as I
                        went, but I didnt really know why.
                    </div>
                </div>
                <div
                    className="dark-violet"
                    style={{
                        position: "relative",
                        top: "16em",
                        left: "240px"
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            top: "10px",
                            left: "20px",
                            whiteSpace: "pre-wrap",
                            color: "white"
                        }}
                    >
                        <h3>Why You Should Hire Me</h3>WIP
                    </div>
                </div>
                {/*<div className="App">
                    <header
                        style={{
                            fontWeight: "600",
                            fontSize: "50px",
                            fontStyle: "oblique",
                            color: "#f6f2ee"
                        }}
                    >
                        About Me
                    </header>
                    
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end"
                        }}
                    >
                        <Card border="light">
                            <Card.Body
                                style={{ width: "25em", height: "10em" }}
                            >
                                <Button
                                    variant="dark"
                                    href="https://www.linkedin.com/in/philip-stoyanov-044344229/"
                                    style={{
                                        width: "25em",
                                        height: "10em",
                                        borderLeft: "7px solid orange"
                                    }}
                                >
                                    LinkedIn
                                </Button>
                            </Card.Body>
                            <Card.Body
                                style={{ width: "25em", height: "10em" }}
                            >
                                <Button
                                    variant="warning"
                                    href="file:///C:/Users/pksto/OneDrive/Desktop/Philip%20Stoyanov's%20Official%20Resume.pdf"
                                    style={{
                                        width: "25em",
                                        height: "10em",
                                        borderLeft: "7px solid red"
                                    }}
                                >
                                    Resume
                                </Button>
                            </Card.Body>
                            <Card.Body
                                style={{ width: "25em", height: "10em" }}
                            >
                                <Button
                                    variant="dark"
                                    href="https://leetcode.com/pkstoy/"
                                    style={{
                                        width: "25em",
                                        height: "10em",
                                        borderLeft: "7px solid salmon"
                                    }}
                                >
                                    LeetCode
                                </Button>
                            </Card.Body>
                            <Card.Body
                                style={{ width: "25em", height: "10em" }}
                            >
                                <Button
                                    variant="dark"
                                    href="https://udel.joinhandshake.com/stu/users/33196837"
                                    style={{
                                        width: "25em",
                                        height: "10em",
                                        borderLeft: "7px solid pink"
                                    }}
                                >
                                    Handshake
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    
                </div>*/}
            </div>
        </>
    );
}

export default App;
