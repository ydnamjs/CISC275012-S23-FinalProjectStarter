import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import gpro from "../image/gpro.png";
import book from "../image/book.png";
import controller from "../image/controller.png";
import "../App.css";

export function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <h2>SecondSail</h2>
                </div>
            </header>
            <br></br>
            <br></br>
            <p>
                <Button>My history orders</Button>
            </p>
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
                                src={book}
                                height={200}
                                width={200}
                                alt={"book"}
                            ></img>
                            <Col>Used Python Textbook</Col>
                            <p>Price: $15.00</p>
                            <Button>Add to Cart</Button>
                        </Col>
                        <Col>
                            <img
                                src={controller}
                                height={200}
                                width={200}
                                alt={"Controller"}
                            ></img>
                            <Col>Nintendo Switch Pro Controller</Col>
                            <p>Price: $74.99</p>
                            <Button>Add to Cart</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <br></br>
            {/** Below is Admin code */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}

export default Home;
