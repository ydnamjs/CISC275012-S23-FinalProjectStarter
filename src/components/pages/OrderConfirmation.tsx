/* eslint-disable no-extra-parens */
import React from "react";
import { CheckoutItem } from "../CheckoutItem";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import formatMoney from "../../utility/formatMoney";
import {
    Card,
    CardHeader,
    Heading,
    Center,
    Text,
    VStack,
    Stack,
    Divider,
    Image
} from "@chakra-ui/react";
import Navbar from "../Navbar";
import { prodM, prodW } from "../ProductList";
import ".././OrderConfirmation.css";
import "../Modal";

type stateProps = {
    Fname: string;
};
const OrderConfirmation = (stateProps) => {
    const shipping = "src/assets/location_icon.png";
    const creditCard = "src/assets/cc_icon.png";
    const delivery = "/Users/kevinchau/Team-1/src/assets/delivery_icon.png";
    const date = new Date();
    const showTime = date.getHours() + ":" + date.getMinutes();
    const currDate = date.toLocaleDateString();
    const { cartItems } = useShoppingCart();

    return (
        <div>
            <Navbar></Navbar>
            <Stack gap={3}>
                <Center>
                    <Text as="b" className="TYtext">
                        Thank You!
                    </Text>
                </Center>
                <Center>
                    <Text as="b">Your order has been placed!</Text>
                </Center>
                <Center>
                    <Text>
                        We sent an email to <b>{props.Fname}</b> with your order
                        confirmation and receipt.
                    </Text>
                </Center>
                <Center>
                    <Text>
                        If the email has not arrived in two minutes, please
                        check your spam folder to see if the email was routed
                        here.
                    </Text>
                </Center>
                <div>
                    <Center>
                        <p>
                            <b>Time placed:</b> {currDate} {showTime} EST
                        </p>
                    </Center>
                </div>
                <div className="container">
                    <div className="box">
                        <Image
                            src={shipping}
                            boxSize={5}
                            alt="Shopping Cart"
                            objectFit="cover"
                        ></Image>
                        <b>Shipping</b>
                    </div>
                    <div className="box">
                        <Image
                            src={creditCard}
                            boxSize={5}
                            alt="Shopping Cart"
                            objectFit="cover"
                        ></Image>
                        <b>Billing Details</b>
                    </div>
                    <div className="box">
                        <Image
                            src={delivery}
                            boxSize={5}
                            alt="Shopping Cart"
                            objectFit="cover"
                        ></Image>
                        <b>Shipping Method</b>
                    </div>
                </div>
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
