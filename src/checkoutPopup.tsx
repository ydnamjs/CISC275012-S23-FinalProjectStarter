import React, { Dispatch, SetStateAction, useState } from "react";
import CheckoutForm from "./Components/Common/CheckoutForm";
import { Button } from "react-bootstrap";

function CheckoutPopup({
    setEmailOrder,
    setFirstNameOrder,
    setLastNameOrder,
    setAddressOrder,
    setSubmitOrder
}: {
    // emailOrder: string;
    setEmailOrder: Dispatch<SetStateAction<string>>;
    //  firstNameOrder: string;
    setFirstNameOrder: Dispatch<SetStateAction<string>>;
    //  lastNameOrder: string;
    setLastNameOrder: Dispatch<SetStateAction<string>>;
    // addressOrder: string;
    setAddressOrder: Dispatch<SetStateAction<string>>;
    //  submitOrder: number;
    setSubmitOrder: Dispatch<SetStateAction<number>>;
}): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    function sendOrder(): void {
        setSubmitOrder(1);
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
                            // handleAction={() => handleAction(3)}
                        ></CheckoutForm>
                    </div>
                    <Button onClick={() => sendOrder()}>Submit Order</Button>
                </div>
            )}
        </div>
    );
}

export default CheckoutPopup;
