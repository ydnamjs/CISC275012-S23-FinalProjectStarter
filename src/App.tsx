import React from "react";
import { Button /*Col, Container, Row*/ } from "react-bootstrap";
//import shirt1 from "./images/shirt1.png";
//import shirt2 from "./images/shirt2.png";
//import sweatshirt1 from "./images/sweatshirt1.png";
//import sweatshirt2 from "./images/sweatshirt2.png";
import "./App.css";
import { FilterClothes } from "./FilterClothes";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Rachel Sison, Gia
                Diaz, Steven Kraus, Grace Melton, Ryan Sexton
                <div>
                    <Button>Login</Button>
                    <Button>Checkout</Button>
                </div>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
                <div>
                    <hr />
                    <FilterClothes></FilterClothes>
                    <hr />
                </div>
            </p>
        </div>
    );
}

export default App;
