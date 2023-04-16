import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import image from "./image/image.png";
import gpro from "./image/gpro.png";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">The Marketplace</header>
            <br></br>
            <br></br>
            <div>
                <Container>
                    <Row></Row>
                    <Row>
                        <Col>
                            <img
                                src={gpro}
                                height={200}
                                width={200}
                                alt={"gpro"}
                            ></img>
                            <Col>Logitech G Pro Superlight</Col>
                            <p>Price: $150.00</p>
                            <Button>Add to Cart</Button>
                        </Col>
                        <Col>
                            <img
                                src={
                                    "https://mma.prnewswire.com/media/2005357/Sony_WH_CH520_headphone.jpg?w=200"
                                }
                                height={200}
                                width={200}
                                alt={"Pair of Sony Headphones"}
                            ></img>
                            <Col>Sony Headphones</Col>
                            <p>Price: $60.00</p>
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
