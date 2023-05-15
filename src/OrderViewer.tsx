import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./App.css";

function OrderViewer({
    emailOrder,
    setEmailOrder,
    firstNameOrder,
    setFirstNameOrder,
    lastNameOrder,
    setLastNameOrder,
    addressOrder,
    setAddressOrder,
    submitOrder,
    setSubmitOrder
}: {
    emailOrder: string;
    setEmailOrder: Dispatch<SetStateAction<string>>;
    firstNameOrder: string;
    setFirstNameOrder: Dispatch<SetStateAction<string>>;
    lastNameOrder: string;
    setLastNameOrder: Dispatch<SetStateAction<string>>;
    addressOrder: string;
    setAddressOrder: Dispatch<SetStateAction<string>>;
    submitOrder: number;
    setSubmitOrder: Dispatch<SetStateAction<number>>;
}): JSX.Element {
    const [orderArray, setOrderArray] = useState<JSX.Element[]>([]);

    function OrderForm(): JSX.Element {
        return (
            <div>
                <div>
                    <p>first name: {firstNameOrder}</p>
                    <p>last name:{lastNameOrder}</p>
                    <p>address: {addressOrder}</p>
                    <p>email: {emailOrder}</p>
                </div>
                <div>
                    <Button>Cancel Order</Button>
                </div>
            </div>
        );
    }

    function OrderCreated(): JSX.Element {
        if (submitOrder === 1) {
            useEffect(() => {
                setSubmitOrder(0);
            });
            useEffect(() => {
                setOrderArray((orderArray) =>
                    orderArray.concat(<OrderForm></OrderForm>)
                );
            });

            useEffect(() => {
                setEmailOrder("");
            });
            useEffect(() => {
                setFirstNameOrder("");
            });
            useEffect(() => {
                setLastNameOrder("");
            });
            useEffect(() => {
                setAddressOrder("");
            });
            return <OrderDisplay></OrderDisplay>;
        } else {
            return <OrderDisplay></OrderDisplay>;
        }
    }

    function OrderDisplay(): JSX.Element {
        return (
            <>
                {orderArray.map((order: JSX.Element, index: number) => (
                    <div key={index}>{order}</div>
                ))}
            </>
        );
    }

    return (
        <div className="OrderViewer">
            <div>
                <Container>
                    <OrderCreated></OrderCreated>
                </Container>
            </div>
        </div>
    );
}

export default OrderViewer;
