/* eslint-disable indent */
import React, { Dispatch, SetStateAction } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import shirt1 from "./images/shirt4.png";
import "./App.css";

function ShirtFourDetail({
    stock4,
    setStock4,
    shirtCart4,
    setShirtCart4
}: {
    stock4: number;
    setStock4: Dispatch<SetStateAction<number>>;
    shirtCart4: number;
    setShirtCart4: Dispatch<SetStateAction<number>>;
}): JSX.Element {
    return (
        <div className="ShirtFour">
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Col
                                style={{
                                    fontSize: "30px"
                                }}
                            >
                                Shirt Four
                            </Col>
                            <img
                                data-testid={"blue"}
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
                                Price: $15.00
                            </p>
                            <Button
                                onClick={
                                    stock4 > 0
                                        ? () => {
                                              setShirtCart4(shirtCart4 + 1);
                                              setStock4(stock4 - 1);
                                          }
                                        : () => setShirtCart4(shirtCart4)
                                }
                            >
                                Add to Cart
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ShirtFourDetail;
