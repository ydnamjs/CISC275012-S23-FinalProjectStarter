import React from "react";
import "./Product.css";
import "./Main.css";
import { Button, Card, CardBody, Image } from "@chakra-ui/react";
import { formatMoney } from "../utility/formatMoney";
import { useShoppingCart } from "../context/ShoppingCartContext";

type Product = {
    name: string;
    price: number;
    stock: number;
    sizes: string[];
    description: string;
    picture: string;
    category: string;
};

const Product: React.FC<Product> = ({
    name,
    price,
    stock,
    description,
    picture
}) => {
    const { getQuantity, increaseQuantity, decreaseQuantity, removeFromCart } =
        useShoppingCart();
    const quantity = getQuantity(name);

    return (
        <div className="productImage">
            <Card
                key={name}
                boxShadow="md"
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                transition="box-shadow 0.2s"
                variant="outline"
                width="750px"
                height="350px"
                _hover={{ boxShadow: "2xl" }}
                align="center"
            >
                <Image
                    src={require(`../assets/${picture}.png`)}
                    height="500px"
                    style={{ objectFit: "cover" }}
                />
                <CardBody className="d-flex flex-column">
                    <span className="fs-2">{name}</span>
                    <span className="productDesc">{description}</span>
                    <span>In Stock: {stock}</span>
                    <h1 className="mg-2 text-muted">{formatMoney(price)}</h1>
                    <div className="mt-auto">
                        <div
                            className="d-flex align-items-center flex-column"
                            style={{ gap: "1.5rem" }}
                        >
                            <div
                                className="d-flex align-items-center justify-content-center"
                                style={{ gap: "1.5rem" }}
                            >
                                <Button onClick={() => decreaseQuantity(name)}>
                                    -
                                </Button>
                                <div>
                                    <span className="fs-3">{quantity} </span>
                                    in cart
                                </div>
                                <Button onClick={() => increaseQuantity(name)}>
                                    +
                                </Button>
                            </div>
                            <Button
                                size="sm"
                                onClick={() => removeFromCart(name)}
                            >
                                Remove
                            </Button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default Product;
