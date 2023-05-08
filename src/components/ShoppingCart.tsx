/* eslint-disable no-extra-parens */
import React, { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import formatMoney from "../utility/formatMoney";
import { prodM, prodW } from "./ProductList";
import { Link } from "@chakra-ui/react";
<<<<<<< HEAD
import { Link as Link2 } from "react-router-dom";
=======
import CheckoutModal from "./Modal";
import { useState } from "react";
>>>>>>> 93a17a8a3a57b1a78caec21862f9da8e3b30509a

type ShoppingCartProps = {
    isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart();
    const [openModal, setOpenModal] = useState(false);

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map((item) => (
                        <CartItem key={item.name} {...item} />
                    ))}
                    <div className="ms-auto fw-bold fs-6">
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
                </Stack>
                <div style={{ textAlign: "right", paddingTop: 5 }}>
                    <Link href="/#/checkout">
                        <Button>Checkout</Button>
                    </Link>
                    <Button onClick={() => setOpenModal(!openModal)}>
                        Checkout Modal
                    </Button>
                    {openModal && <CheckoutModal></CheckoutModal>}
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
