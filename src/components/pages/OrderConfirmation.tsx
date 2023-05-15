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
import Shipping from "../../assets/location_icon.png";
import creditCard from "../../assets/cc_icon.png";
import Delivery from "../../assets/delivery_icon.png";

const OrderConfirmation = () => {
    const date = new Date();
    const showTime = date.getHours() + ":" + date.getMinutes();
    const currDate = date.toLocaleDateString();
    const { cartItems } = useShoppingCart();

    let totalPrice = cartItems.reduce((totalPrice, cartItem) => {
        let item = prodM.find((item) => item.name === cartItem.name);
        if (item == null) {
            item = prodW.find((item) => item.name === cartItem.name);
        }
        return totalPrice + (item?.price || 0) * cartItem.quantity;
    }, 0);

    const shippingMethod = localStorage.getItem("Shipping");
    let shippingCost = 0;
    if (shippingMethod === "U.S. Expedited (1 Day): $14.95") {
        shippingCost = 14.95;
    } else {
        shippingCost = 7.95;
    }
    totalPrice += shippingCost;

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
                        We sent an email to{" "}
                        <b>{localStorage.getItem("Email")}</b> with your order
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
                <Center>
                    <div className="container">
                        <div className="box">
                            <Center>
                                <Image
                                    src={Shipping}
                                    boxSize={10}
                                    alt="Shopping Cart"
                                    objectFit="cover"
                                ></Image>
                            </Center>
                            <b>Shipping</b>
                            <div>
                                <p>
                                    <b>
                                        {localStorage.getItem("FirstName")}{" "}
                                        {localStorage.getItem("LastName")}
                                    </b>
                                    <p>
                                        Phone: {localStorage.getItem("Number")}
                                    </p>
                                </p>
                            </div>
                            <p>
                                {localStorage.getItem("Address1")}
                                {localStorage.getItem("Address2")}
                            </p>
                            <p>
                                {localStorage.getItem("City")}
                                {","} {localStorage.getItem("State")}{" "}
                                {localStorage.getItem("Zip")}
                            </p>
                        </div>
                        <div className="box">
                            <Center>
                                <Image
                                    src={creditCard}
                                    boxSize={10}
                                    alt="Shopping Cart"
                                    objectFit="cover"
                                ></Image>
                            </Center>
                            <b>Billing Details</b>
                            <p>
                                <p>
                                    <p>
                                        <b>Cardholder:</b>{" "}
                                        {localStorage.getItem("Name")}
                                    </p>
                                </p>
                                <b>Card Number:</b>{" "}
                                {localStorage.getItem("CardNum")}{" "}
                            </p>
                        </div>
                        <div className="box">
                            <Center>
                                <Image
                                    src={Delivery}
                                    boxSize={10}
                                    alt="Shopping Cart"
                                    objectFit="cover"
                                ></Image>
                            </Center>
                            <b>Shipping Method</b>
                            <p>Preferred Method:</p>
                            <p>{shippingMethod}</p>
                        </div>
                    </div>
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
                        <p>Shipping: {shippingCost}</p>
                        Subtotal:&nbsp;
                        {formatMoney(
                            cartItems.reduce((totalPrice, cartItem) => {
                                let item = prodM.find(
                                    (item) => item.name === cartItem.name
                                );
                                if (item == null) {
                                    item = prodW.find(
                                        (item) => item.name === cartItem.name
                                    );
                                }
                                return (
                                    totalPrice +
                                    (item?.price || 0) * cartItem.quantity
                                );
                            }, 0)
                        )}
                        <div>
                            Total: {"$"}
                            {totalPrice}
                        </div>
                    </div>
                </VStack>
            </Stack>
        </div>
    );
};

export default OrderConfirmation;
