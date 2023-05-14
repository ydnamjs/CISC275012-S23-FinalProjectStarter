import React, { Dispatch, SetStateAction } from "react";
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
    stockSix,
    shirtCart1,
    shirtCart2,
    shirtCart3,
    shirtCart4,
    shirtCart5,
    shirtCart6,
    setShirtCart1,
    setShirtCart2,
    setShirtCart3,
    setShirtCart4,
    setShirtCart5,
    setShirtCart6,
    setStock1,
    setStock2,
    setStock3,
    setStock4,
    setStock5,
    setStock6
}: {
    color: string;
    stockOne: number;
    stockTwo: number;
    stockThree: number;
    stockFour: number;
    stockFive: number;
    stockSix: number;
    shirtCart1: number;
    shirtCart2: number;
    shirtCart3: number;
    shirtCart4: number;
    shirtCart5: number;
    shirtCart6: number;
    setShirtCart1: Dispatch<SetStateAction<number>>;
    setShirtCart2: Dispatch<SetStateAction<number>>;
    setShirtCart3: Dispatch<SetStateAction<number>>;
    setShirtCart4: Dispatch<SetStateAction<number>>;
    setShirtCart5: Dispatch<SetStateAction<number>>;
    setShirtCart6: Dispatch<SetStateAction<number>>;
    setStock1: Dispatch<SetStateAction<number>>;
    setStock2: Dispatch<SetStateAction<number>>;
    setStock3: Dispatch<SetStateAction<number>>;
    setStock4: Dispatch<SetStateAction<number>>;
    setStock5: Dispatch<SetStateAction<number>>;
    setStock6: Dispatch<SetStateAction<number>>;
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
                                cart={shirtCart1}
                                setCart={setShirtCart1}
                                setStock={setStock1}
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
                                cart={shirtCart2}
                                setCart={setShirtCart2}
                                setStock={setStock2}
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
                                cart={shirtCart3}
                                setCart={setShirtCart3}
                                setStock={setStock3}
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
                                cart={shirtCart4}
                                setCart={setShirtCart4}
                                setStock={setStock4}
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
                                cart={shirtCart5}
                                setCart={setShirtCart5}
                                setStock={setStock5}
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
                                cart={shirtCart6}
                                setCart={setShirtCart6}
                                setStock={setStock6}
                            ></ClothingDisplay>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ShirtDisplays;
