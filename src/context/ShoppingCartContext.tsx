import React, { ReactNode, createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";

type ShoppingCartProviderProps = {
    children: ReactNode;
};

type ShoppingCartContext = {
    openCart: () => void;
    closeCart: () => void;
    cartQuantity: number;
    cartItems: CartItem[];
    getQuantity: (name: string) => number;
    increaseQuantity: (name: string) => void;
    decreaseQuantity: (name: string) => void;
    removeFromCart: (name: string) => void;
};

type CartItem = {
    name: string;
    quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);
    const cartQuantity = cartItems.reduce(
        (quantity, item) => quantity + item.quantity,
        0
    );
    function getQuantity(name: string) {
        return cartItems.find((item) => item.name === name)?.quantity || 0;
    }
    function increaseQuantity(name: string) {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.name === name) == null) {
                return [...currItems, { name, quantity: 1 }];
            } else {
                return currItems.map((item) => {
                    if (item.name === name) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }
    function decreaseQuantity(name: string) {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.name === name)?.quantity === 1) {
                return currItems.filter((item) => item.name !== name);
            } else {
                return currItems.map((item) => {
                    if (item.name === name) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }
    function removeFromCart(name: string) {
        setCartItems((currItems) => {
            return currItems.filter((item) => item.name !== name);
        });
    }
    return (
        <ShoppingCartContext.Provider
            value={{
                getQuantity,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
                cartItems,
                cartQuantity,
                openCart,
                closeCart
            }}
        >
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    );
}
