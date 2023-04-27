import React, { useState } from "react";
import "./Product.css";
import "./Main.css";
import { Button, Card } from "react-bootstrap";
import { formatMoney } from "../utility/formatMoney";

interface ProductProps {
    name: string;
    price: number;
    description: string;
    picture: string;
}

const Product: React.FC<ProductProps> = ({
    name,
    price,
    description,
    picture
}) => {
    const quantity = 0;
    return (
        <div className="productImage">
            <img src={require(`../assets/${picture}.png`)} alt={description} />
            <h2 className="productName">{name}</h2>
            <p className="productDesc">{description}</p>
            <p className="productPrice">Price: ${price}</p>
            <div className="productSize"></div>
        <Card>
            <Card.Img
                variant="top"
                src={require(`../assets/${picture}.png`)}
                height="500px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="mg-5 text-muted">{description}</span>

                    <span className="mg-2 text-muted">
                        {formatMoney(price)}
                    </span>
                </Card.Title>
                <div className="mt-auto">
                    <div
                        className="d-flex align-items-center flex-column"
                        style={{ gap: ".5rem" }}
                    >
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ gap: ".5rem" }}
                        >
                            <Button>-</Button>
                            <div>
                                <span className="fs-3">{quantity}</span>
                                in cart
                            </div>
                            <Button>+</Button>
                        </div>
                        <Button variant="danger" size="sm">
                            Remove
                        </Button>
                    </div>
                </div>
            </Card.Body>
            <p>{quantity}</p>
        </Card>
    );
);


export default Product;
