import React, { useState } from "react";
import { Form } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
//import { SweatShirtDisplays } from "./SweatShirtDisplays";
//import { ShirtDisplays } from "./ShirtDisplays";

export function ColorFilter({
    color,
    setColor
}: {
    color: string;
    setColor: (color: string) => void;
}): JSX.Element {
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
        setVisibility(!visibility);
    }

    //const [selection, setSelection] = useState<string>("");

    function conditionallyRenderedElement(): void {
        if (color === "yellow") {
            COLORS.filter((color: string): boolean => color != "yellow");
            flipVisbility();
        }
    }

    /* function updateColor(event: React.ChangeEvent<HTMLSelectElement>) {
        setColor(event.target.value);
    } */

    return (
        <div>
            <Form.Group controlId="userEmotions">
                <Form.Label>Select a Color</Form.Label>
                <Form.Select
                    value={color}
                    onChange={conditionallyRenderedElement}
                >
                    <option value="yellow">Yellow</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="black">Black</option>
                    <option value="purple">Purple</option>
                    <option value="pink">Pink</option>
                    <option value="green">Green</option>
                </Form.Select>
            </Form.Group>
            The user is feeling {color}.
        </div>
    );
}
