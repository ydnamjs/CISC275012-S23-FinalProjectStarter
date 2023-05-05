import React from "react";
import { Form } from "react-bootstrap";
import "./dropdown.css";

export function ColorFilter({
    color,
    setColor
}: {
    color: string;
    setColor: (color: string) => void;
}): JSX.Element {
    function conditionallyRenderedElement(value: string): void {
        setColor(value);
    }

    return (
        <div>
            <div className="dropdown">
                <Form.Group controlId="userColor">
                    <Form.Label>Select a Color</Form.Label>
                    <Form.Select
                        value={color}
                        onChange={(e) => {
                            conditionallyRenderedElement(e.currentTarget.value);
                        }}
                    >
                        <option value="yellow">Yellow</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="black">Black</option>
                        <option value="purple">Purple</option>
                        <option value="pink">Pink</option>
                        <option value="green">Green</option>
                        <option value="all">All</option>
                    </Form.Select>
                </Form.Group>
                The user selected {color}.
            </div>
        </div>
    );
}
