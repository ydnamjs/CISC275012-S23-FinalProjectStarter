import React, { Dispatch, SetStateAction } from "react";
import { Button, Container } from "react-bootstrap";
import "./App.css";

function OrderViewer({
    orderArray,
    setOrderArray
}: {
    orderArray: JSX.Element[];
    setOrderArray: Dispatch<SetStateAction<JSX.Element[]>>;
}): JSX.Element {
    function hidden(index: React.Key | null): void {
        setOrderArray(
            orderArray.filter(
                (order: JSX.Element): boolean => order.key !== index
            )
        );
    }
    return (
        <div className="OrderViewer">
            <div>
                <Container style={{ border: "1px solid black" }}>
                    {orderArray.map((order: JSX.Element) => (
                        <div key={order.key}>
                            {order}
                            <Button onClick={() => hidden(order.key)}>
                                Cancel Order
                            </Button>
                        </div>
                    ))}
                </Container>
            </div>
        </div>
    );
}

export default OrderViewer;
