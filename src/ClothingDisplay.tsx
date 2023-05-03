import React from "react";
import { Button, Col } from "react-bootstrap";
//import shirt1 from "./images/shirt1.png";
//import shirt2 from "./images/shirt2.png";
//import sweatshirt1 from "./images/sweatshirt1.png";
//import sweatshirt2 from "./images/sweatshirt2.png";

export function ClothingDisplay({
    title,
    source,
    height,
    width,
    alt,
    color
}: {
    title: string;
    source: string;
    height: number;
    width: number;
    alt: string;
    color: string;
}): JSX.Element {
    return (
        <div>
            <Col>{title}</Col>
            <img
                src={source}
                height={height}
                width={width}
                alt={alt}
                color={color}
            ></img>
            <div>
                <Button
                    style={{
                        fontSize: "10px"
                    }}
                >
                    Detail
                </Button>
            </div>
            <p>Price: $2.00</p>
            <Button>Add to Cart</Button>
        </div>
    );
}
