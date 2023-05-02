import React from "react";
import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { CartItem } from "../CartItem";
import formatMoney from "../../utility/formatMoney";
import { prod } from "../ProductListMen";
type CartItemProps = {
    name: string;
    quantity: number;
};
const Checkout = () => {
    const { cartItems } = useShoppingCart();
    return (
        <Stack gap={3}>
            {cartItems.map((item) => (
                <CartItem key={item.name} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-6">
                {formatMoney(
                    cartItems.reduce((total, cartItem) => {
                        const item = prod.find(
                            (item) => item.name === cartItem.name
                        );
                        return total + (item?.price || 0) * cartItem.quantity;
                    }, 0)
                )}
            </div>
        </Stack>
    );
};
export default Checkout;
