import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <>
            <div className="black-space"></div>
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
                <div className="button-style">
                    <Button variant="outline-dark" size="lg">
                        LinkedIn
                    </Button>
                    <Button variant="outline-dark">Resume</Button>
                    <Button variant="outline-dark">LeetCode</Button>
                    <Button variant="outline-dark">Handshake</Button>
                </div>
            </div>
        </>
    );
}

export default App;
