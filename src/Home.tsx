import React from "react";
//import { Button } from "react-bootstrap";
import "./App.css";
import { FilterClothes } from "./FilterClothes";

export function Home(): JSX.Element {
    return (
        <div className="Home">
            <p>
                <div>
                    Filter Items: <FilterClothes></FilterClothes>
                </div>
            </p>
        </div>
    );
}

export default Home;
