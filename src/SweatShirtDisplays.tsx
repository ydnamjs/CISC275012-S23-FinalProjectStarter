import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ClothingDisplay } from "./ClothingDisplay";
import sweatshirt1 from "./images/sweatshirt1.png";
import sweatshirt2 from "./images/sweatshirt2.png";
import sweatshirt3 from "./images/sweatshirt3.png";
import sweatshirt4 from "./images/sweatshirt4.png";
import sweatshirt5 from "./images/sweatshirt5.png";
import sweatshirt6 from "./images/sweatshirt6.png";

export function SweatShirtDisplays() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <ClothingDisplay
                            title={"Sweatshirt One"}
                            source={sweatshirt1}
                            height={200}
                            width={200}
                            alt={"Shirt one"}
                        ></ClothingDisplay>
                    </Col>
                    <Col>
                        <ClothingDisplay
                            title={"Sweatshirt Two"}
                            source={sweatshirt2}
                            height={200}
                            width={200}
                            alt={"Shirt two"}
                        ></ClothingDisplay>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ClothingDisplay
                            title={"Sweatshirt Three"}
                            source={sweatshirt3}
                            height={200}
                            width={200}
                            alt={"Shirt three"}
                        ></ClothingDisplay>
                    </Col>
                    <Col>
                        <ClothingDisplay
                            title={"Sweatshirt Four"}
                            source={sweatshirt4}
                            height={200}
                            width={200}
                            alt={"Shirt four"}
                        ></ClothingDisplay>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ClothingDisplay
                            title={"Sweatshirt Five"}
                            source={sweatshirt5}
                            height={200}
                            width={200}
                            alt={"Shirt five"}
                        ></ClothingDisplay>
                    </Col>
                    <Col>
                        <ClothingDisplay
                            title={"Sweatshirt Six"}
                            source={sweatshirt6}
                            height={200}
                            width={200}
                            alt={"Shirt six"}
                        ></ClothingDisplay>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SweatShirtDisplays;
