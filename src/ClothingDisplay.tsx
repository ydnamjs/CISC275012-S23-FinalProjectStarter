import React from "react";
import { Button, Col } from "react-bootstrap";

export function ClothingDisplay({
    title,
    source,
    height,
    width,
    alt
}: {
    title: string;
    source: string;
    height: number;
    width: number;
    alt: string;
}): JSX.Element {
    return (
        <div>
            <Col>{title}</Col>
            <img src={source} height={height} width={width} alt={alt}></img>
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
