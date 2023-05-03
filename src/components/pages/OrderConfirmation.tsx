/* eslint-disable no-extra-parens */
import React from "react";
import { CheckoutItem } from "../CheckoutItem";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { Stack } from "react-bootstrap";
import formatMoney from "../../utility/formatMoney";
import { prodM } from "../ProductListMen";
import { prodW } from "../ProductListWomen";
import { Card, CardHeader, Heading } from "@chakra-ui/react";

const OrderConfirmation = () => {
    const { cartItems } = useShoppingCart();
    return (
        <Stack gap={3}>
            <h1 className="text-center">Checkout</h1>
            <Card>
                <CardHeader>
                    <Heading size="md">Order Overview</Heading>
                </CardHeader>
            </Card>
            <div></div>
            {cartItems.map((item) => (
                <CheckoutItem key={item.name} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-6">
                {formatMoney(
                    cartItems.reduce((total, cartItem) => {
                        let item = prodM.find(
                            (item) => item.name === cartItem.name
                        );
                        if (item == null) {
                            item = prodW.find(
                                (item) => item.name === cartItem.name
                            );
                        }
                        return total + (item?.price || 0) * cartItem.quantity;
                    }, 0)
                )}
            </div>
        </Stack>
    );
};

export default OrderConfirmation;
