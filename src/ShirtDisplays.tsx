import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ClothingDisplay } from "./ClothingDisplay";
import shirt1 from "./images/shirt1.png";
import shirt2 from "./images/shirt2.png";
import shirt3 from "./images/shirt3.png";
import shirt4 from "./images/shirt4.png";
import shirt5 from "./images/shirt5.png";
import shirt6 from "./images/shirt6.png";

export function ShirtDisplays({
    color,
    stockOne,
    stockTwo,
    stockThree,
    stockFour,
    stockFive,
    stockSix
}: {
    color: string;
    stockOne: number;
    stockTwo: number;
    stockThree: number;
    stockFour: number;
    stockFive: number;
    stockSix: number;
}) {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        {(color === "black" || color === "all") && (
                            <ClothingDisplay
                                title={"Shirt One"}
                                testid={"black"}
                                source={shirt1}
                                height={200}
                                width={200}
                                alt={"Shirt"}
                                color={"black"}
                                stock={stockOne}
                                price={"$15.00 USD"}
                            ></ClothingDisplay>
                        )}
                    </Col>
                    <Col>
                        {(color === "red" || color === "all") && (
                            <ClothingDisplay
                                title={"Shirt Two"}
                                testid={"red"}
                                source={shirt2}
                                height={200}
                                width={200}
                                alt={"Shirt"}
                                color={"red"}
                                stock={stockTwo}
                                price={"$15.00 USD"}
                            ></ClothingDisplay>
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {(color === "green" || color === "all") && (
                            <ClothingDisplay
                                title={"Shirt Three"}
                                testid={"green"}
                                source={shirt3}
                                height={200}
                                width={200}
                                alt={"Shirt"}
                                color={"green"}
                                stock={stockThree}
                                price={"$15.00 USD"}
                            ></ClothingDisplay>
                        )}
                    </Col>
                    <Col>
                        {(color === "blue" || color === "all") && (
                            <ClothingDisplay
                                title={"Shirt Four"}
                                testid={"blue"}
                                source={shirt4}
                                height={200}
                                width={200}
                                alt={"Shirt"}
                                color={"blue"}
                                stock={stockFour}
                                price={"$15.00 USD"}
                            ></ClothingDisplay>
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {(color === "pink" || color === "all") && (
                            <ClothingDisplay
                                title={"Shirt Five"}
                                testid={"pink"}
                                source={shirt5}
                                height={200}
                                width={200}
                                alt={"Shirt"}
                                color={"pink"}
                                stock={stockFive}
                                price={"$15.00 USD"}
                            ></ClothingDisplay>
                        )}
                    </Col>
                    <Col>
                        {(color === "yellow" || color === "all") && (
                            <ClothingDisplay
                                title={"Shirt Six"}
                                testid={"yellow"}
                                source={shirt6}
                                height={200}
                                width={200}
                                alt={"Shirt"}
                                color={"yellow"}
                                stock={stockSix}
                                price={"$15.00 USD"}
                            ></ClothingDisplay>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ShirtDisplays;
