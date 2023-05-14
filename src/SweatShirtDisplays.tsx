import React, { Dispatch, SetStateAction } from "react";
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
    sweatStockSix,
    sweatCart1,
    sweatCart2,
    sweatCart3,
    sweatCart4,
    sweatCart5,
    sweatCart6,
    sweatSetCart1,
    sweatSetCart2,
    sweatSetCart3,
    sweatSetCart4,
    sweatSetCart5,
    sweatSetCart6,
    sweatSetStock1,
    sweatSetStock2,
    sweatSetStock3,
    sweatSetStock4,
    sweatSetStock5,
    sweatSetStock6
}: {
    color: string;
    sweatStockOne: number;
    sweatStockTwo: number;
    sweatStockThree: number;
    sweatStockFour: number;
    sweatStockFive: number;
    sweatStockSix: number;
    sweatCart1: number;
    sweatSetCart1: Dispatch<SetStateAction<number>>;
    sweatCart2: number;
    sweatSetCart2: Dispatch<SetStateAction<number>>;
    sweatCart3: number;
    sweatSetCart3: Dispatch<SetStateAction<number>>;
    sweatCart4: number;
    sweatSetCart4: Dispatch<SetStateAction<number>>;
    sweatCart5: number;
    sweatSetCart5: Dispatch<SetStateAction<number>>;
    sweatCart6: number;
    sweatSetCart6: Dispatch<SetStateAction<number>>;
    sweatSetStock1: Dispatch<SetStateAction<number>>;
    sweatSetStock2: Dispatch<SetStateAction<number>>;
    sweatSetStock3: Dispatch<SetStateAction<number>>;
    sweatSetStock4: Dispatch<SetStateAction<number>>;
    sweatSetStock5: Dispatch<SetStateAction<number>>;
    sweatSetStock6: Dispatch<SetStateAction<number>>;
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
                                cart={sweatCart1}
                                setCart={sweatSetCart1}
                                setStock={sweatSetStock1}
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
                                cart={sweatCart2}
                                setCart={sweatSetCart2}
                                setStock={sweatSetStock2}
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
                                cart={sweatCart3}
                                setCart={sweatSetCart3}
                                setStock={sweatSetStock3}
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
                                cart={sweatCart4}
                                setCart={sweatSetCart4}
                                setStock={sweatSetStock4}
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
                                cart={sweatCart5}
                                setCart={sweatSetCart5}
                                setStock={sweatSetStock5}
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
                                cart={sweatCart6}
                                setCart={sweatSetCart6}
                                setStock={sweatSetStock6}
                            ></ClothingDisplay>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SweatShirtDisplays;
