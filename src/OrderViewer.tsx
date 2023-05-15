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
    const [hiddenArray, setHiddenArray] = useState<boolean>(false);
    let newArray = [...orderArray];

    function OrderForm(): JSX.Element {
        return (
            <div>
                <p>first name: {firstNameOrder}</p>
                <p>last name:{lastNameOrder}</p>
                <p>address: {addressOrder}</p>
                <p>email: {emailOrder}</p>
                <Button onClick={() => hidden()}>Cancel Order</Button>
            </div>
        );
    }

    function hidden(): void {
        setHiddenArray(true);
    }
    function OrderCreated(): JSX.Element {
        if (submitOrder === 1) {
            newArray = [
                ...orderArray,
                <OrderForm key={firstNameOrder}></OrderForm>
            ];
            useEffect(() => {
                setSubmitOrder(0);
            });
            useEffect(() => {
                setOrderArray(newArray);
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
        if (orderArray.length >= 1) {
            return (
                <>
                    {orderArray.map((order: JSX.Element, index: number) => (
                        <div key={index}>{order}</div>
                    ))}
                </>
            );
        } else {
            return <Button>No orders</Button>;
        }
    }

    return (
        <div className="OrderViewer">
            <div>
                <Container hidden={hiddenArray}>
                    <OrderCreated></OrderCreated>
                </Container>
            </div>
        </div>
    );
}

export default OrderViewer;
