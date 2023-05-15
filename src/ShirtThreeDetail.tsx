/* eslint-disable indent */
import React, { Dispatch, SetStateAction } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import shirt1 from "./images/shirt3.png";
import "./App.css";

function ShirtThreeDetail({
    stock3,
    shirtCart3,
    setStock3,
    setShirtCart3
}: {
    stock3: number;
    shirtCart3: number;
    setStock3: Dispatch<SetStateAction<number>>;
    setShirtCart3: Dispatch<SetStateAction<number>>;
}): JSX.Element {
    return (
        <div className="ShirtThree">
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Col
                                style={{
                                    fontSize: "30px"
                                }}
                            >
                                Shirt Three
                            </Col>
                            <img
                                data-testid={"green"}
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
                                    stock3 > 0
                                        ? () => {
                                              setShirtCart3(shirtCart3 + 1);
                                              setStock3(stock3 - 1);
                                          }
                                        : () => setShirtCart3(shirtCart3)
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

export default ShirtThreeDetail;
