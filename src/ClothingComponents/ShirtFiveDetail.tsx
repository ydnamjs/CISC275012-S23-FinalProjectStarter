import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import shirt5 from "./images/shirt5.png";
import "./App.css";

function ShirtFiveDetail(): JSX.Element {
    return (
        <div className="ShirtFive">
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
                                data-testid={"pink"}
                                src={shirt5}
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
                            <Button>Add to Cart</Button>
                            <Button>Remove from Cart</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ShirtFiveDetail;
