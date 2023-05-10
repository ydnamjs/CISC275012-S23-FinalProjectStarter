import React from "react";

// Define the type for the items in the cart
interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    imageURl: string;
}

// Define the type for the props that will be passed to the Cart component
interface Props {
    items: CartItem[];
}

// Define the Cart component
const Cart: React.FC<Props> = ({ items }) => {
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {/* Render each item in the cart */}
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} x ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
