/* eslint-disable indent */
import React, { Dispatch, SetStateAction } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import sweatshirt1 from "./images/sweatshirt3.png";
import "./App.css";

function SweatshirtThreeDetail({
    sweatCart3,
    sweatSetCart3,
    sweatSetStock3,
    sweatStock3
}: {
    sweatCart3: number;
    sweatStock3: number;
    sweatSetStock3: Dispatch<SetStateAction<number>>;
    sweatSetCart3: Dispatch<SetStateAction<number>>;
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
                                Sweatshirt Three
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
                                    sweatStock3 > 0
                                        ? () => {
                                              sweatSetCart3(sweatCart3 + 1);
                                              sweatSetStock3(sweatStock3 - 1);
                                          }
                                        : () => sweatSetCart3(sweatCart3)
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

export default SweatshirtThreeDetail;
