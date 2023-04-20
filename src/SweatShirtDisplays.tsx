import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ClothingDisplay } from "./ClothingDisplay";
import sweatshirt1 from "./images/sweatshirt1.png";
import sweatshirt2 from "./images/sweatshirt2.png";

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
            </Container>
        </div>
    );
}
