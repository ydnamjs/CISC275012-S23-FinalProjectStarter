import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ClothingDisplay } from "./ClothingDisplay";
import shirt1 from "./images/shirt1.png";
import shirt2 from "./images/shirt2.png";

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
            </Container>
        </div>
    );
}
