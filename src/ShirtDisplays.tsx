import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ClothingDisplay } from "./ClothingDisplay";
import shirt1 from "./images/shirt1.png";
import shirt2 from "./images/shirt2.png";
import shirt3 from "./images/shirt3.png";
import shirt4 from "./images/shirt4.png";
import shirt5 from "./images/shirt5.png";
import shirt6 from "./images/shirt6.png";

export function ShirtDisplays() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <ClothingDisplay
                            title={"Shirt One"}
                            source={shirt1}
                            height={200}
                            width={200}
                            alt={"Shirt one"}
                        ></ClothingDisplay>
                    </Col>
                    <Col>
                        <ClothingDisplay
                            title={"Shirt Two"}
                            source={shirt2}
                            height={200}
                            width={200}
                            alt={"Shirt two"}
                        ></ClothingDisplay>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ClothingDisplay
                            title={"Shirt Three"}
                            source={shirt3}
                            height={200}
                            width={200}
                            alt={"Shirt three"}
                        ></ClothingDisplay>
                    </Col>
                    <Col>
                        <ClothingDisplay
                            title={"Shirt Four"}
                            source={shirt4}
                            height={200}
                            width={200}
                            alt={"Shirt four"}
                        ></ClothingDisplay>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ClothingDisplay
                            title={"Shirt Five"}
                            source={shirt5}
                            height={200}
                            width={200}
                            alt={"Shirt five"}
                        ></ClothingDisplay>
                    </Col>
                    <Col>
                        <ClothingDisplay
                            title={"Shirt Six"}
                            source={shirt6}
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

export default ShirtDisplays;
