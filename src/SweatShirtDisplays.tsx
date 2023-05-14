import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ClothingDisplay } from "./ClothingDisplay";
import sweatshirt1 from "./images/sweatshirt1.png";
import sweatshirt2 from "./images/sweatshirt2.png";
import sweatshirt3 from "./images/sweatshirt3.png";
import sweatshirt4 from "./images/sweatshirt4.png";
import sweatshirt5 from "./images/sweatshirt5.png";
import sweatshirt6 from "./images/sweatshirt6.png";

export function SweatShirtDisplays({
    color,
    sweatStockOne,
    sweatStockTwo,
    sweatStockThree,
    sweatStockFour,
    sweatStockFive,
    sweatStockSix
}: {
    color: string;
    sweatStockOne: number;
    sweatStockTwo: number;
    sweatStockThree: number;
    sweatStockFour: number;
    sweatStockFive: number;
    sweatStockSix: number;
}) {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        {(color === "black" || color === "all") && (
                            <ClothingDisplay
                                title={"Sweatshirt One"}
                                testid={"black"}
                                source={sweatshirt1}
                                height={200}
                                width={200}
                                alt={"Sweatshirt"}
                                color={"black"}
                                stock={sweatStockOne}
                                price={"$30.00 USD"}
                            ></ClothingDisplay>
                        )}
                    </Col>
                    <Col>
                        {(color === "blue" || color === "all") && (
                            <ClothingDisplay
                                title={"Sweatshirt Two"}
                                testid={"blue"}
                                source={sweatshirt2}
                                height={200}
                                width={200}
                                alt={"Sweatshirt"}
                                color={"blue"}
                                stock={sweatStockTwo}
                                price={"$30.00 USD"}
                            ></ClothingDisplay>
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {(color === "red" || color === "all") && (
                            <ClothingDisplay
                                title={"Sweatshirt Three"}
                                testid={"red"}
                                source={sweatshirt3}
                                height={200}
                                width={200}
                                alt={"Sweatshirt"}
                                color={"red"}
                                stock={sweatStockThree}
                                price={"$30.00 USD"}
                            ></ClothingDisplay>
                        )}
                    </Col>
                    <Col>
                        {(color === "green" || color === "all") && (
                            <ClothingDisplay
                                title={"Sweatshirt Four"}
                                testid={"green"}
                                source={sweatshirt4}
                                height={200}
                                width={200}
                                alt={"Sweatshirt"}
                                color={"green"}
                                stock={sweatStockFour}
                                price={"$30.00 USD"}
                            ></ClothingDisplay>
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {(color === "purple" || color === "all") && (
                            <ClothingDisplay
                                title={"Sweatshirt Five"}
                                testid={"purple"}
                                source={sweatshirt5}
                                height={200}
                                width={200}
                                alt={"Sweatshirt"}
                                color={"purple"}
                                stock={sweatStockFive}
                                price={"$30.00 USD"}
                            ></ClothingDisplay>
                        )}
                    </Col>
                    <Col>
                        {(color === "yellow" || color === "all") && (
                            <ClothingDisplay
                                title={"Sweatshirt Six"}
                                testid={"yellow"}
                                source={sweatshirt6}
                                height={200}
                                width={200}
                                alt={"Sweatshirt"}
                                color={"yellow"}
                                stock={sweatStockSix}
                                price={"$30.00 USD"}
                            ></ClothingDisplay>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SweatShirtDisplays;
