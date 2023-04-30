import React from "react";
import "./Product.css";
import "./Main.css";
import { Button, Card } from "react-bootstrap";
import { formatMoney } from "../utility/formatMoney";
import { useShoppingCart } from "../context/ShoppingCartContext";

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
    const { getQuantity, increaseQuantity, decreaseQuantity, removeFromCart } =
        useShoppingCart();
    const quantity = getQuantity(name);

    return (
        <div className="productImage">
            <Card>
                <Card.Img
                    variant="top"
                    src={require(`../assets/${picture}.png`)}
                    height="550px"
                    style={{ objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                        <div>
                            <span className="productName">{name}</span>
                            <h1 className="productDesc">{description}</h1>
                        </div>
                        <span className="productPrice">
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
                                <Button onClick={() => decreaseQuantity(name)}>
                                    -
                                </Button>
                                <div>
                                    <span className="fs-3">{quantity}</span>
                                    in cart
                                </div>
                                <Button onClick={() => increaseQuantity(name)}>
                                    +
                                </Button>
                            </div>
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() => removeFromCart(name)}
                            >
                                Remove
                            </Button>
                        </div>
                    </div>
                </Card.Body>
                <p>{quantity}</p>
            </Card>
        </div>
    );
};

export default Product;
