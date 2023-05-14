/* eslint-disable indent */
import React, { Dispatch, SetStateAction } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import shirt1 from "./images/shirt6.png";
import "./App.css";

function ShirtSixDetail({
    stock6,
    setStock6,
    shirtCart6,
    setShirtCart6
}: {
    stock6: number;
    setStock6: Dispatch<SetStateAction<number>>;
    shirtCart6: number;
    setShirtCart6: Dispatch<SetStateAction<number>>;
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
                                Shirt Six
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
                                    stock6 > 0
                                        ? () => {
                                              setShirtCart6(shirtCart6 + 1);
                                              setStock6(stock6 - 1);
                                          }
                                        : () => setShirtCart6(shirtCart6)
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

export default ShirtSixDetail;
