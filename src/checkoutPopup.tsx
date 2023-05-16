import React, { Dispatch, SetStateAction, useState } from "react";
import CheckoutForm from "./Components/Common/CheckoutForm";
import { Button } from "react-bootstrap";

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
    setOrderArray
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
}): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    function OrderForm(): JSX.Element {
        const first = firstNameOrder;
        const last = lastNameOrder;
        const address = addressOrder;
        const email = emailOrder;
        return (
            <div key={first} style={{ border: "1px solid black" }}>
                <p>
                    Name: {first} {last}
                </p>
                <p>Address: {address}</p>
                <p>Email: {email}</p>
            </div>
        );
    }

    function OrderCreated(): void {
        setOrderArray([
            ...orderArray,
            <OrderForm key={firstNameOrder}></OrderForm>
        ]);
        setIsOpen(false);
    }

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>Checkout</Button>
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
                    <Button onClick={() => OrderCreated()}>Submit Order</Button>
                </div>
            )}
        </div>
    );
}

export default CheckoutPopup;
