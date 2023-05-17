import React, { Dispatch, SetStateAction, useState } from "react";
import CheckoutForm from "./Components/Common/CheckoutForm";
import { Button } from "react-bootstrap";
import "./index.css";

function CheckoutPopup({
    setEmailOrder,
    setFirstNameOrder,
    setLastNameOrder,
    setAddressOrder,
    emailOrder,
    firstNameOrder,
    lastNameOrder,
    addressOrder,
    orderArray,
    setOrderArray,
    setShirtCart1,
    setShirtCart2,
    setShirtCart3,
    setShirtCart4,
    setShirtCart5,
    setShirtCart6,
    sweatSetCart1,
    sweatSetCart2,
    sweatSetCart3,
    sweatSetCart4,
    sweatSetCart5,
    sweatSetCart6,
    orderKey,
    setOrderKey
}: {
    setEmailOrder: Dispatch<SetStateAction<string>>;
    setFirstNameOrder: Dispatch<SetStateAction<string>>;
    setLastNameOrder: Dispatch<SetStateAction<string>>;
    setAddressOrder: Dispatch<SetStateAction<string>>;
    emailOrder: string;
    firstNameOrder: string;
    lastNameOrder: string;
    addressOrder: string;
    orderArray: JSX.Element[];
    setOrderArray: Dispatch<SetStateAction<JSX.Element[]>>;
    setShirtCart1: Dispatch<SetStateAction<number>>;
    setShirtCart2: Dispatch<SetStateAction<number>>;
    setShirtCart3: Dispatch<SetStateAction<number>>;
    setShirtCart4: Dispatch<SetStateAction<number>>;
    setShirtCart5: Dispatch<SetStateAction<number>>;
    setShirtCart6: Dispatch<SetStateAction<number>>;
    sweatSetCart1: Dispatch<SetStateAction<number>>;
    sweatSetCart2: Dispatch<SetStateAction<number>>;
    sweatSetCart3: Dispatch<SetStateAction<number>>;
    sweatSetCart4: Dispatch<SetStateAction<number>>;
    sweatSetCart5: Dispatch<SetStateAction<number>>;
    sweatSetCart6: Dispatch<SetStateAction<number>>;
    orderKey: number;
    setOrderKey: Dispatch<SetStateAction<number>>;
}): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    function OrderForm(): JSX.Element {
        const first = firstNameOrder;
        const last = lastNameOrder;
        const address = addressOrder;
        const email = emailOrder;
        const key = orderKey;
        return (
            <div key={key} style={{ border: "1px solid black" }}>
                <p>
                    Name: {first} {last}
                </p>
                <p>Address: {address}</p>
                <p>Email: {email}</p>
            </div>
        );
    }

    function OrderCreated(): void {
        setOrderArray([...orderArray, <OrderForm key={orderKey}></OrderForm>]);
        setOrderKey(orderKey + 1);
        setIsOpen(false);
    }

    return (
        <div>
            <Button
                onClick={() => {
                    setIsOpen(true);
                    setIsHidden(true);
                }}
            >
                Checkout
            </Button>
            <div hidden={isHidden} style={{ fontSize: "20px" }}>
                Thank you for your order!
            </div>
            {isOpen && (
                <div>
                    <div>
                        <CheckoutForm
                            title="Checkout"
                            setEmail={setEmailOrder}
                            setFirstName={setFirstNameOrder}
                            setLastName={setLastNameOrder}
                            setAddress={setAddressOrder}
                        ></CheckoutForm>
                    </div>
                    <Button
                        onClick={() => {
                            OrderCreated();
                            setShirtCart1(0);
                            setShirtCart2(0);
                            setShirtCart3(0);
                            setShirtCart4(0);
                            setShirtCart5(0);
                            setShirtCart6(0);
                            sweatSetCart1(0);
                            sweatSetCart2(0);
                            sweatSetCart3(0);
                            sweatSetCart4(0);
                            sweatSetCart5(0);
                            sweatSetCart6(0);
                            setIsHidden(false);
                        }}
                    >
                        Submit Order
                    </Button>
                </div>
            )}
        </div>
    );
}

export default CheckoutPopup;
