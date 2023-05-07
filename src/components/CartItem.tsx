import React, { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { prodM } from "./ProductListMen";
import { prodW } from "./ProductListWomen";
import formatMoney from "../utility/formatMoney";
import {
    Image,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
} from "@chakra-ui/react";

type CartItemProps = {
    name: string;
    quantity: number;
};

export function CartItem({ name, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart();
    let item:
        | {
              name: string;
              price: number;
              description: string;
              sizes: string[];
              picture: string;
              category: string;
          }
        | undefined
        | null;
    if (prodM.find((item) => item.name === name) != null) {
        item = prodM.find((item) => item.name === name);
    } else if (prodW.find((item) => item.name === name) != null) {
        item = prodW.find((item) => item.name === name);
    }
    if (item?.name == null) {
        return null;
    }

    return (
        <Stack
            direction="horizontal"
            gap={2}
            className="d-flex align-items-center"
        >
            <Image
                src={require(`../assets/${item.picture}.png`)}
                boxSize={12}
            />
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
            <NumberInput
                defaultValue={quantity}
                min={1}
                max={999}
                size="sm"
                maxW={20}
            >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <Button
                variant="outline-danger"
                size="sm"
                onClick={() => {
                    if (item != null) {
                        removeFromCart(item.name);
                    }
                }}
            >
                &times;
            </Button>
        </Stack>
    );
}
