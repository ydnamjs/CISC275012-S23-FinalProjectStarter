import React from "react";
import { Button, Col } from "react-bootstrap";

export function ClothingDisplay({
    title,
    testid,
    source,
    height,
    width,
    alt,
    color,
    stock,
    price
}: {
    title: string;
    testid: string;
    source: string;
    height: number;
    width: number;
    alt: string;
    color: string;
    stock: number;
    price: string;
}): JSX.Element {
    return (
        <div>
            <Col>{title}</Col>
            <img
                data-testid={testid}
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
            <p>Price: {price}</p>
            <Button>Add to Cart</Button>
        </div>
    );
}
