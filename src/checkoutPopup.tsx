import React, { Dispatch, SetStateAction, useState } from "react";
import CheckoutForm from "./Components/Common/CheckoutForm";
import { Button } from "react-bootstrap";
//import BasicTextFields from "./Components/Common/CheckoutForm";
//import { Routes, Route, Link, useNavigate } from "react-router-dom";

function CheckoutPopup({
    emailOrder,
    setEmailOrder,
    firstNameOrder,
    setFirstNameOrder,
    lastNameOrder,
    setLastNameOrder,
    addressOrder,
    setAddressOrder
}: {
    emailOrder: string;
    setEmailOrder: Dispatch<SetStateAction<string>>;
    firstNameOrder: string;
    setFirstNameOrder: Dispatch<SetStateAction<string>>;
    lastNameOrder: string;
    setLastNameOrder: Dispatch<SetStateAction<string>>;
    addressOrder: string;
    setAddressOrder: Dispatch<SetStateAction<string>>;
}): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

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
                            //handleAction={() => handleAction(3)}
                        ></CheckoutForm>
                    </div>
                    <Button onClick={() => setIsOpen(false)}>
                        Submit Order
                    </Button>
                </div>
            )}
        </div>
    );
}

export default CheckoutPopup;
