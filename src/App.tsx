import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import image from "./image/image.png";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <br></br>
            <br></br>
            <div>
                <Container>
                    <Row></Row>
                    <Row>
                        <Col>
                            <img
                                src={image}
                                height={200}
                                width={200}
                                alt={"Item 1"}
                            ></img>
                            <Col>Item 1</Col>
                            <p>Price: $1.00</p>
                            <Button>Add to Cart</Button>
                        </Col>
                        <Col>
                            <img
                                src={image}
                                height={200}
                                width={200}
                                alt={"Item 2"}
                            ></img>
                            <Col>Item 2</Col>
                            <p>Price: $1.00</p>
                            <Button>Add to Cart</Button>
                        </Col>
                        <Col>
                            <img
                                src={image}
                                height={200}
                                width={200}
                                alt={"Item 3"}
                            ></img>
                            <Col>Item 3</Col>
                            <p>Price: $1.00</p>
                            <Button>Add to Cart</Button>
                        </Col>
                        <Col>
                            <img
                                src={image}
                                height={200}
                                width={200}
                                alt={"Item 4"}
                            ></img>
                            <Col>Item 4</Col>
                            <p>Price: $1.00</p>
                            <Button>Add to Cart</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <br></br>
            <p>
                Edited by Zachary Witte, ZhongYiJiang, Sean Hennessey and Yuhan
                Lin
            </p>
        </div>
    );
}

export default App;
