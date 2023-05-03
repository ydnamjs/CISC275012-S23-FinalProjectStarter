import React, { useState } from "react";
import { Form } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { SweatShirtDisplays } from "./SweatShirtDisplays";
import { ShirtDisplays } from "./ShirtDisplays";

export function ColorFilter(): JSX.Element {
    const COLORS = [
        "red",
        "green",
        "purple",
        "blue",
        "yellow",
        "black",
        "pink"
    ];

    //const [color, setColor] = useState<string>("");
    const [visibility, setVisibility] = useState<boolean>(true);

    function flipVisbility(): void {
        COLORS.map((color: string) => setVisibility(!visibility));
    }

    /* function updateColor(event: React.ChangeEvent<HTMLSelectElement>) {
        setColor(event.target.value);
    } */

    return (
        <DropdownButton id="dropdown-basic-button" title="Color">
            <Dropdown.Item href="yellow" onClick={flipVisbility}>
                Yellow
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Green</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Red</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Purple</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Pink</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Black</Dropdown.Item>
        </DropdownButton>
        /* <div>
            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    key={color}
                    type="dropdown"
                    name="colors"
                    onChange={updateColor}
                    id="color-check"
                    label={color}
                    value={color}
                    checked={color === "happy"}
                    background-color={color}
                />
            ))}
            <div>You have chosen: </div>
            <span data-testid="colored-box" style={{ backgroundColor: color }}>
                {" "}
                {color}
            </span>
        </div> */
    );
}
