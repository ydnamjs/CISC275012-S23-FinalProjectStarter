/* eslint-disable no-extra-parens */
import React, { useRef, useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import formatMoney from "../utility/formatMoney";
import { prodM, prodW } from "./ProductList";
import CheckoutModal from "./Modal";
import {
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
    DrawerHeader,
    DrawerFooter,
    Stack,
    Link
} from "@chakra-ui/react";

type ShoppingCartProps = {
    isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart();
    const [openModal, setOpenModal] = useState(false);
    const btnRef = useRef<HTMLButtonElement>(null);

    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={closeCart}
                finalFocusRef={btnRef}
                size="sm"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>In Cart: </DrawerHeader>
                    <DrawerBody>
                        <Stack gap={3}>
                            {cartItems.map((item) => (
                                <CartItem key={item.name} {...item} />
                            ))}
                            <div className="ms-auto fw-bold fs-6">
                                Total:&nbsp;
                                {formatMoney(
                                    cartItems.reduce((total, cartItem) => {
                                        let item = prodM.find(
                                            (item) =>
                                                item.name === cartItem.name
                                        );
                                        if (item == null) {
                                            item = prodW.find(
                                                (item) =>
                                                    item.name === cartItem.name
                                            );
                                        }

                                        return (
                                            total +
                                            (item?.price || 0) *
                                                cartItem.quantity
                                        );
                                    }, 0)
                                )}
                            </div>
                            <div style={{ textAlign: "right", paddingTop: 5 }}>
                                <Link href=" /#/checkout">
                                    <Button>Checkout</Button>
                                </Link>
                            </div>
                            <Button onClick={() => setOpenModal(!openModal)}>
                                Checkout Modal
                            </Button>
                            {openModal && <CheckoutModal></CheckoutModal>}
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={closeCart}>
                            Exit
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}
