import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";
//import shirt1 from "./images/shirt1.png";
//import shirt2 from "./images/shirt2.png";
//import shirt3 from "./images/shirt3.png";
//import sweatshirt1 from "./images/sweatshirt1.png";
//import sweatshirt2 from "./images/sweatshirt2.png";
//import { Button /*, Col, Container, Row*/ } from "react-bootstrap";
//import shirt1 from "./images/shirt1.png";
//import shirt2 from "./images/shirt2.png";
//import sweatshirt1 from "./images/sweatshirt1.png";
//import sweatshirt2 from "./images/sweatshirt2.png";
import "./App.css";
import { FilterClothes } from "./FilterClothes";
//import { text } from "stream/consumers";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <p>logo</p>
                            </Col>
                            <Col>
                                <Button>Login</Button>
                            </Col>
                            <Col>
                                <Button>Checkout</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
            <p>
                <div>
                    Filter Items:
                    <Button>Shirts</Button>
                    <Button>Sweatshirts</Button>
                    <Button>Size</Button>
                    <hr />
                    <FilterClothes></FilterClothes>
                    <hr />
                </div>
            </p>
            <div>
                {/* <Container>
                    <Row>
                        <Col>
                            <Col>Shirt One.</Col>
                            <img
                                src={shirt1}
                                height={200}
                                width={200}
                                alt={"Shirt 1"}
                            ></img>
                            <p>Price: $2.00</p>
                            <Button>Add to Cart</Button>
                        </Col>
                        <Col>
                            <Col>Shirt two.</Col>
                            <img
                                src={shirt2}
                                height={200}
                                width={200}
                                alt={"Shirt 2"}
                            ></img>
                            <p>Price: $20.00</p>
                            <Button>Add to Cart</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Col>Sweatshirt 1</Col>
                            <img
                                src={sweatshirt1}
                                height={200}
                                width={200}
                                alt={"Sweatshirt 1"}
                            ></img>
                            <p>Price: $200.00</p>
                            <Button>Add to Cart</Button>
                        </Col>
                        <Col>
                            <Col>Sweatshirt 2</Col>
                            <img
                                src={sweatshirt2}
                                height={200}
                                width={200}
                                alt={"Sweatshirt 2"}
                            ></img>
                            <p>Price: $2000.00</p>
                            <Button>Add to Cart</Button>
                        </Col>
                    </Row>
                </Container> */}
            </div>
        </div>
    );
}

export default App;
