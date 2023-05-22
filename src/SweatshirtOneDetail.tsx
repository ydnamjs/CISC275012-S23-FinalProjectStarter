/* eslint-disable indent */
import React, { Dispatch, SetStateAction } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import sweatshirt1 from "./images/sweatshirt1.png";
import "./App.css";

function SweatshirtOneDetail({
    sweatCart1,
    sweatSetCart1,
    sweatSetStock1,
    sweatStock1
}: {
    sweatCart1: number;
    sweatStock1: number;
    sweatSetStock1: Dispatch<SetStateAction<number>>;
    sweatSetCart1: Dispatch<SetStateAction<number>>;
}): JSX.Element {
    return (
        <div className="SweatshirtOne">
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Col
                                style={{
                                    fontSize: "30px"
                                }}
                            >
                                Sweatshirt One
                            </Col>
                            <img
                                data-testid={"black"}
                                src={sweatshirt1}
                                height={400}
                                width={400}
                                alt={"Sweatshirt"}
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
                                This is a magnificent and very exquisite
                                sweatshirt. Made of the finest materials.
                            </p>
                            <p
                                style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    fontSize: "20px"
                                }}
                            >
                                Price: $30.00
                            </p>
                            <Button
                                onClick={
                                    sweatStock1 > 0
                                        ? () => {
                                              sweatSetCart1(sweatCart1 + 1);
                                              sweatSetStock1(sweatStock1 - 1);
                                          }
                                        : () => sweatSetCart1(sweatCart1)
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

export default SweatshirtOneDetail;
