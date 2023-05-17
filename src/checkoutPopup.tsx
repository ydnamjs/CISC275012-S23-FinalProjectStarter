import React, { Dispatch, SetStateAction, useState } from "react";
import CheckoutForm from "./Components/Common/CheckoutForm";
import { Button } from "react-bootstrap";
import "./index.css";

function CheckoutPopup({
    setEmailOrder,
    setNameOrder,
    setPaymentInfo,
    setAddressOrder,
    emailOrder,
    nameOrder,
    paymentInfo,
    addressOrder,
    orderArray,
    setOrderArray,
    shirtCart1,
    setShirtCart1,
    shirtCart2,
    setShirtCart2,
    shirtCart3,
    setShirtCart3,
    shirtCart4,
    setShirtCart4,
    shirtCart5,
    setShirtCart5,
    shirtCart6,
    setShirtCart6,
    sweatCart1,
    sweatSetCart1,
    sweatCart2,
    sweatSetCart2,
    sweatCart3,
    sweatSetCart3,
    sweatCart4,
    sweatSetCart4,
    sweatCart5,
    sweatSetCart5,
    sweatCart6,
    sweatSetCart6,
    orderKey,
    setOrderKey
}: {
    setEmailOrder: Dispatch<SetStateAction<string>>;
    setNameOrder: Dispatch<SetStateAction<string>>;
    setPaymentInfo: Dispatch<SetStateAction<string>>;
    setAddressOrder: Dispatch<SetStateAction<string>>;
    emailOrder: string;
    nameOrder: string;
    paymentInfo: string;
    addressOrder: string;
    orderArray: JSX.Element[];
    setOrderArray: Dispatch<SetStateAction<JSX.Element[]>>;
    shirtCart1: number;
    setShirtCart1: Dispatch<SetStateAction<number>>;
    shirtCart2: number;
    setShirtCart2: Dispatch<SetStateAction<number>>;
    shirtCart3: number;
    setShirtCart3: Dispatch<SetStateAction<number>>;
    shirtCart4: number;
    setShirtCart4: Dispatch<SetStateAction<number>>;
    shirtCart5: number;
    setShirtCart5: Dispatch<SetStateAction<number>>;
    shirtCart6: number;
    setShirtCart6: Dispatch<SetStateAction<number>>;
    sweatCart1: number;
    sweatSetCart1: Dispatch<SetStateAction<number>>;
    sweatCart2: number;
    sweatSetCart2: Dispatch<SetStateAction<number>>;
    sweatCart3: number;
    sweatSetCart3: Dispatch<SetStateAction<number>>;
    sweatCart4: number;
    sweatSetCart4: Dispatch<SetStateAction<number>>;
    sweatCart5: number;
    sweatSetCart5: Dispatch<SetStateAction<number>>;
    sweatCart6: number;
    sweatSetCart6: Dispatch<SetStateAction<number>>;
    orderKey: number;
    setOrderKey: Dispatch<SetStateAction<number>>;
}): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    function OrderForm(): JSX.Element {
        const first = nameOrder;
        const address = addressOrder;
        const email = emailOrder;
        const payment = paymentInfo;
        const key = orderKey;
        const shirt1 = shirtCart1;
        const shirt2 = shirtCart2;
        const shirt3 = shirtCart3;
        const shirt4 = shirtCart4;
        const shirt5 = shirtCart5;
        const shirt6 = shirtCart6;
        const sweatshirt1 = sweatCart1;
        const sweatshirt2 = sweatCart2;
        const sweatshirt3 = sweatCart3;
        const sweatshirt4 = sweatCart4;
        const sweatshirt5 = sweatCart5;
        const sweatshirt6 = sweatCart6;
        return (
            <div key={key} style={{ border: "1px solid black" }}>
                <p>Name: {first}</p>
                <p>Email: {email}</p>
                <p>Address: {address}</p>
                <p>Payment Info: {payment}</p>
                <div style={{ border: "1px solid blue" }}>
                    Items Purchased
                    <p hidden={shirt1 == 0}>Shirt One Amount: {shirtCart1}</p>
                    <p hidden={shirt2 == 0}>Shirt Two Amount: {shirtCart2}</p>
                    <p hidden={shirt3 == 0}>Shirt Three Amount: {shirtCart3}</p>
                    <p hidden={shirt4 == 0}>Shirt Four Amount: {shirtCart4}</p>
                    <p hidden={shirt5 == 0}>Shirt Five Amount: {shirtCart5}</p>
                    <p hidden={shirt6 == 0}>Shirt Six Amount: {shirtCart6}</p>
                    <p hidden={sweatshirt1 == 0}>
                        Sweatshirt One Amount: {sweatCart1}
                    </p>
                    <p hidden={sweatshirt2 == 0}>
                        Sweatshirt Two Amount: {sweatCart2}
                    </p>
                    <p hidden={sweatshirt3 == 0}>
                        Sweatshirt Three Amount: {sweatCart3}
                    </p>
                    <p hidden={sweatshirt4 == 0}>
                        Sweatshirt Four Amount: {sweatCart4}
                    </p>
                    <p hidden={sweatshirt5 == 0}>
                        Sweatshirt Five Amount: {sweatCart5}
                    </p>
                    <p hidden={sweatshirt6 == 0}>
                        Sweatshirt Six Amount: {sweatCart6}
                    </p>
                </div>
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
                            setNameOrder={setNameOrder}
                            setPaymentInfo={setPaymentInfo}
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
