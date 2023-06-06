import React from "react";
import "./App.css";
import { Button, Card } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <>
            <div className="App">
                <header
                    style={{
                        fontWeight: "600",
                        fontSize: "50px",
                        fontStyle: "oblique"
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
                        <Card.Body style={{ width: "25em", height: "10em" }}>
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
                        <Card.Body style={{ width: "25em", height: "10em" }}>
                            <Button
                                variant="dark"
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
                        <Card.Body style={{ width: "25em", height: "10em" }}>
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
                        <Card.Body style={{ width: "25em", height: "10em" }}>
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
            </div>
        </>
    );
}

export default App;
