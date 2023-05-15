/* eslint-disable indent */
import React, { Dispatch, SetStateAction } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import shirt1 from "./images/shirt5.png";
import "./App.css";

function ShirtFiveDetail({
    stock5,
    setStock5,
    shirtCart5,
    setShirtCart5
}: {
    stock5: number;
    setStock5: Dispatch<SetStateAction<number>>;
    shirtCart5: number;
    setShirtCart5: Dispatch<SetStateAction<number>>;
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
                                Shirt Five
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
                                    stock5 > 0
                                        ? () => {
                                              setShirtCart5(shirtCart5 + 1);
                                              setStock5(stock5 - 1);
                                          }
                                        : () => setShirtCart5(shirtCart5)
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

export default ShirtFiveDetail;
