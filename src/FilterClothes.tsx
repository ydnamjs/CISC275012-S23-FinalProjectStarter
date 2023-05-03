import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ShirtDisplays } from "./ShirtDisplays";
import { SweatShirtDisplays } from "./SweatShirtDisplays";
import { ColorFilter } from "./ColorFilter";

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
            <Button onClick={flipSweatShirtVisbility}>SweatShirt</Button>
            {Shirtvisible && <SweatShirtDisplays></SweatShirtDisplays>}
            <Button onClick={flipShirtVisbility}>Shirts</Button>
            {SweatShirtvisible && <ShirtDisplays></ShirtDisplays>}
            {<ColorFilter></ColorFilter>}
        </div>
    );
}
