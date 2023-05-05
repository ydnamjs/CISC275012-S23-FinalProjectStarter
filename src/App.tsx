import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";
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
            <div>
                Filter Items: <FilterClothes></FilterClothes>
            </div>
        </div>
    );
}

export default App;
