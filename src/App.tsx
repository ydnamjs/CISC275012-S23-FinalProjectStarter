import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Rachel Sison, Gia
                Diaz, Steven Kraus, Grace Melton, Ryan Sexton
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
                <Button>Shirts</Button>
                <Button>Sweatshirts</Button>
            </p>
        </div>
    );
}

export default App;
