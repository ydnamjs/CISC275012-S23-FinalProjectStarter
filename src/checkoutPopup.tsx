import React, { Dispatch, SetStateAction, useState } from "react";
import CheckoutForm from "./Components/Common/CheckoutForm";
import { Button } from "react-bootstrap";

function CheckoutPopup({
    setEmailOrder,
    setFirstNameOrder,
    setLastNameOrder,
    setAddressOrder,
    setSubmitOrder,
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
    sweatSetCart6
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
}): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    function sendOrder(): void {
        setSubmitOrder(1);
        setIsOpen(false);
    }

    return (
        <div>
            <Button
                onClick={() => {
                    setIsOpen(true);
                }}
            >
                Checkout
            </Button>
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
                    <Button
                        onClick={() => {
                            sendOrder();
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
