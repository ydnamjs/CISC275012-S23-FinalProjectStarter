/* eslint-disable no-extra-parens */
import React from "react";
import { CheckoutItem } from "../CheckoutItem";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import formatMoney from "../../utility/formatMoney";
import { prodM } from "../ProductListMen";
import { prodW } from "../ProductListWomen";
import {
    Card,
    CardHeader,
    Heading,
    Center,
    Text,
    VStack,
    Stack,
    Divider
} from "@chakra-ui/react";
import Navbar from "../Navbar";

const OrderConfirmation = () => {
    const { cartItems } = useShoppingCart();
    return (
        <div>
            <Navbar></Navbar>
            <Stack gap={3}>
                <Center>
                    <Text as="b" fontSize="6xl">
                        Checkout
                    </Text>
                </Center>
                <Card>
                    <CardHeader>
                        <Heading size="md">Order Overview</Heading>
                    </CardHeader>
                </Card>
                <VStack padding={10} rowGap={5}>
                    {cartItems.map((item) => (
                        <CheckoutItem key={item.name} {...item} />
                    ))}
                    <div className="ms-auto fw-bold fs-6">
                        <Divider orientation="vertical" />
                        Total:&nbsp;
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
                                return (
                                    total +
                                    (item?.price || 0) * cartItem.quantity
                                );
                            }, 0)
                        )}
                    </div>
                </VStack>
            </Stack>
        </div>
    );
};

export default OrderConfirmation;
