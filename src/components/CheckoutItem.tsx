import React, { Stack } from "react-bootstrap";
import { prodM, prodW } from "./ProductList";
import { Image } from "@chakra-ui/react";
import formatMoney from "../utility/formatMoney";

type CheckoutItemProps = {
    name: string;
    quantity: number;
};
export function CheckoutItem({ name, quantity }: CheckoutItemProps) {
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
        </Stack>
    );
}
