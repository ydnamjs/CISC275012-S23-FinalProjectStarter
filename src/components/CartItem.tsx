import React, { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { prod } from "./ProductListMen";
import formatMoney from "../utility/formatMoney";

type CartItemProps = {
    name: string;
    quantity: number;
};

export function CartItem({ name, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart();
    const item = prod.find((item) => item.name === name);
    if (item == null) return null;

    return (
        <Stack
            direction="horizontal"
            gap={2}
            className="d-flex align-items-center"
        >
            <img src={item?.picture} />
            <div className="me-auto">
                <div>
                    {item.name} {quantity > 1}{" "}
                    <span className="text-muted" style={{ fontSize: ".65rem" }}>
                        x{quantity}
                    </span>
                </div>
                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                    {formatMoney(item.price)}
                </div>
            </div>
            <div>{formatMoney(item.price * quantity)}</div>
            <Button
                variant="outline-danger"
                size="sm"
                onClick={() => removeFromCart(item.name)}
            >
                &times;
            </Button>
        </Stack>
    );
}
