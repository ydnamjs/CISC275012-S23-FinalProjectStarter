import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import shirt1 from "./images/shirt1.png";
import shirt2 from "./images/shirt2.png";
import sweatshirt1 from "./images/sweatshirt1.png";
import sweatshirt2 from "./images/sweatshirt2.png";
import "./App.css";

function OrderViewer(): JSX.Element {
    return (
        <div className="OrderViewer">
            <div>
                <Container>
                    <Row>
                        <Col>
                            <img
                                src={shirt1}
                                height={100}
                                width={100}
                                alt={"Shirt 1"}
                                style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    fontSize: "20px"
                                }}
                            ></img>
                            <div>
                                <Button
                                    style={{
                                        fontSize: "10px"
                                    }}
                                >
                                    Detail
                                </Button>
                                <p>Total amount: N/A</p>
                                <Button>Add one to Cart</Button>
                                <Button>Remove one from Cart</Button>
                            </div>
                        </Col>
                        <Col>
                            <img
                                src={shirt2}
                                height={100}
                                width={100}
                                alt={"Shirt 2"}
                                style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    fontSize: "20px"
                                }}
                            ></img>
                            <div>
                                <Button
                                    style={{
                                        fontSize: "10px"
                                    }}
                                >
                                    Detail
                                </Button>
                                <p>Total amount: N/A</p>
                                <Button>Add one to Cart</Button>
                                <Button>Remove one from Cart</Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img
                                src={sweatshirt1}
                                height={100}
                                width={100}
                                alt={"Sweatshirt 1"}
                                style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    fontSize: "20px"
                                }}
                            ></img>
                            <div>
                                <Button
                                    style={{
                                        fontSize: "10px"
                                    }}
                                >
                                    Detail
                                </Button>
                                <p>Total amount: N/A</p>
                                <Button>Add one to Cart</Button>
                                <Button>Remove one from Cart</Button>
                            </div>
                        </Col>
                        <Col>
                            <img
                                src={sweatshirt2}
                                height={100}
                                width={100}
                                alt={"Sweatshirt 2"}
                                style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    fontSize: "20px"
                                }}
                            ></img>
                            <div>
                                <Button
                                    style={{
                                        fontSize: "10px"
                                    }}
                                >
                                    Detail
                                </Button>
                                <p>Total amount: N/A</p>
                                <Button>Add one to Cart</Button>
                                <Button>Remove one from Cart</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default OrderViewer;
