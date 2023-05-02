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
        </div>
    );
}

export default App;
