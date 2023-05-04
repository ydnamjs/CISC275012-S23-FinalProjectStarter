import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { FilterClothes } from "./FilterClothes";

export function Home(): JSX.Element {
    return (
        <div className="Home">
            <p>
                <div>
                    Filter Items:
                    <Button>Shirts</Button>
                    <Button>Sweatshirts</Button>
                    <Button>Size</Button>
                    <hr />
                    <FilterClothes></FilterClothes>
                    <hr />
                </div>
            </p>
        </div>
    );
}

export default Home;
