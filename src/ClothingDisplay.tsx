/* eslint-disable indent */
import React, { Dispatch, SetStateAction } from "react";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";

export function ClothingDisplay({
    title,
    testid,
    source,
    height,
    width,
    alt,
    color,
    stock,
    price,
    cart,
    setCart,
    setStock,
    path
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
    cart: number;
    setCart: Dispatch<SetStateAction<number>>;
    setStock: Dispatch<SetStateAction<number>>;
    path: string;
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
                <Link to={path}>
                    <Button
                        style={{
                            fontSize: "10px"
                        }}
                    >
                        Detail
                    </Button>
                </Link>
            </div>
            <p>Stock: {stock}</p>
            <p>Price: {price}</p>
            <Button
                onClick={
                    stock > 0
                        ? () => {
                              setCart(cart + 1);
                              setStock(stock - 1);
                          }
                        : () => setCart(cart)
                }
            >
                Add to Cart
            </Button>
        </div>
    );
}
