import React, { Dispatch, SetStateAction } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import shirt1 from "./images/shirt1.png";
import "./App.css";

function ShirtOneDetail({
    stock1,
    setShirtCart1,
    shirtCart1
}: {
    stock1: number;
    shirtCart1: number;
    setShirtCart1: Dispatch<SetStateAction<number>>;
}): JSX.Element {
    return (
        <div className="ShirtOne">
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Col
                                style={{
                                    fontSize: "30px"
                                }}
                            >
                                Shirt One
                            </Col>
                            <img
                                data-testid={"black"}
                                src={shirt1}
                                height={400}
                                width={400}
                                alt={"Shirt"}
                                style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    fontSize: "20px"
                                }}
                            ></img>
                        </Col>
                        <Col
                            style={{
                                fontSize: "30px"
                            }}
                        >
                            Product Description
                            <p
                                style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    fontSize: "50px"
                                }}
                            >
                                This is a magnificent and very exquisite shirt.
                                Made of the finest materials.
                            </p>
                            <p
                                style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    fontSize: "20px"
                                }}
                            >
                                Price: $2.00
                            </p>
                            <Button
                                onClick={
                                    stock1 > 0
                                        ? () => setShirtCart1(shirtCart1 + 1)
                                        : () => setShirtCart1(shirtCart1)
                                }
                            >
                                Add to Cart
                            </Button>
                            <Button>Remove from Cart</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ShirtOneDetail;
