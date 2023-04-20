import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import shirt1 from "./images/shirt1.png";
//import shirt2 from "./images/shirt2.png";
//import sweatshirt1 from "./images/sweatshirt1.png";
//import sweatshirt2 from "./images/sweatshirt2.png";
//import { ClothingDisplay } from "./ClothingDisplay";
import { ShirtDisplays } from "./ShirtDisplays";
import { SweatShirtDisplays } from "./SweatShirtDisplays";

export function FilterClothes(): JSX.Element {
    const [Shirtvisible, setShirtVisible] = useState<boolean>(true);
    const [SweatShirtvisible, setSweatShirtVisible] = useState<boolean>(true);

    function flipShirtVisbility(): void {
        setShirtVisible(!Shirtvisible);
    }

    function flipSweatShirtVisbility(): void {
        setSweatShirtVisible(!SweatShirtvisible);
    }

    return (
        <div>
            <Button onClick={flipShirtVisbility}>Shirt</Button>
            {Shirtvisible && <ShirtDisplays></ShirtDisplays>}
            <Button onClick={flipSweatShirtVisbility}>Sweatshirt</Button>
            {SweatShirtvisible && <SweatShirtDisplays></SweatShirtDisplays>}
        </div>
    );
}
