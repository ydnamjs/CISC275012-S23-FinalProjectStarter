/* eslint-disable indent */
import React, { Dispatch, SetStateAction } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import shirt2 from "./images/shirt2.png";
import "./App.css";

function ShirtTwoDetail({
    stock2,
    setStock2,
    shirtCart2,
    setShirtCart2
}: {
    stock2: number;
    shirtCart2: number;
    setStock2: Dispatch<SetStateAction<number>>;
    setShirtCart2: Dispatch<SetStateAction<number>>;
}): JSX.Element {
    return (
        <div className="ShirtTwo">
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Col
                                style={{
                                    fontSize: "30px"
                                }}
                            >
                                Shirt Two
                            </Col>
                            <img
                                data-testid={"red"}
                                src={shirt2}
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
                                    stock2 > 0
                                        ? () => {
                                              setShirtCart2(shirtCart2 + 1);
                                              setStock2(stock2 - 1);
                                          }
                                        : () => setShirtCart2(shirtCart2)
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

export default ShirtTwoDetail;
