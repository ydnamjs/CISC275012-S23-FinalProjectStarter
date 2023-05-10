import React from "react";
import { Button, Col } from "react-bootstrap";

export function ClothingDisplay({
    title,
    source,
    height,
    width,
    alt,
    color,
    stock
}: {
    title: string;
    source: string;
    height: number;
    width: number;
    alt: string;
    color: string;
    stock: number;
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
            <p>Stock: {stock}</p>
            <p>Price: $2.00</p>
            <Button>Add to Cart</Button>
        </div>
    );
}
