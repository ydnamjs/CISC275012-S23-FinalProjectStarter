import React from "react";
import { useContext, createContext, ReactNode, useState } from "react";
import { Cart } from "./Cart";
import { useLocalStorage } from "./hooks/useLocalStorage";

type CartContext = {
    openCart: () => void;
    closeCart: () => void;
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    cartQuantity: number;
    cartItems: CartItem[];
};

type CartItem = {
    id: number;
    quantity: number;
};

const CartContext = createContext({} as CartContext);

export function useCart() {
    return useContext(CartContext);
}

type CartProviderProps = {
    children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("cart", []);

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    );

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);
    function getItemQuantity(id: number) {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    }

    function increaseCartQuantity(id: number) {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id) === null) {
                return [...currItems, { id, quantity: 1 }];
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function decreaseCartQuantity(id: number) {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
                return currItems.filter((item) => item.id !== id);
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, stock: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function removeFromCart(id: number) {
        setCartItems((currItems) => {
            return currItems.filter((item) => item.id !== id);
        });
    }

    return (
        <CartContext.Provider
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                openCart,
                closeCart,
                cartItems,
                cartQuantity
            }}
        >
            {children}
            <Cart isOpen={isOpen} />
        </CartContext.Provider>
    );
}
