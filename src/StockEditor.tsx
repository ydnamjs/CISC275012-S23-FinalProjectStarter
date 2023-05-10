/* eslint-disable indent */
import React, { Dispatch, SetStateAction } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import shirt1 from "./images/shirt1.png";
import shirt2 from "./images/shirt2.png";
import shirt3 from "./images/shirt3.png";
import shirt4 from "./images/shirt4.png";
import shirt5 from "./images/shirt5.png";
import shirt6 from "./images/shirt6.png";
import sweatshirt1 from "./images/sweatshirt1.png";
import sweatshirt2 from "./images/sweatshirt2.png";
import sweatshirt3 from "./images/sweatshirt3.png";
import sweatshirt4 from "./images/sweatshirt4.png";
import sweatshirt5 from "./images/sweatshirt5.png";
import sweatshirt6 from "./images/sweatshirt6.png";
import "./App.css";

function StockEditor({
    stock1,
    setStock1,
    stock2,
    setStock2,
    stock3,
    setStock3,
    stock4,
    setStock4,
    stock5,
    setStock5,
    stock6,
    setStock6,
    sweatStock1,
    sweatSetStock1,
    sweatStock2,
    sweatSetStock2,
    sweatStock3,
    sweatSetStock3,
    sweatStock4,
    sweatSetStock4,
    sweatStock5,
    sweatSetStock5,
    sweatStock6,
    sweatSetStock6
}: {
    stock1: number;
    setStock1: Dispatch<SetStateAction<number>>;
    stock2: number;
    setStock2: Dispatch<SetStateAction<number>>;
    stock3: number;
    setStock3: Dispatch<SetStateAction<number>>;
    stock4: number;
    setStock4: Dispatch<SetStateAction<number>>;
    stock5: number;
    setStock5: Dispatch<SetStateAction<number>>;
    stock6: number;
    setStock6: Dispatch<SetStateAction<number>>;
    sweatStock1: number;
    sweatSetStock1: Dispatch<SetStateAction<number>>;
    sweatStock2: number;
    sweatSetStock2: Dispatch<SetStateAction<number>>;
    sweatStock3: number;
    sweatSetStock3: Dispatch<SetStateAction<number>>;
    sweatStock4: number;
    sweatSetStock4: Dispatch<SetStateAction<number>>;
    sweatStock5: number;
    sweatSetStock5: Dispatch<SetStateAction<number>>;
    sweatStock6: number;
    sweatSetStock6: Dispatch<SetStateAction<number>>;
}): JSX.Element {
    return (
        <div className="StockEditor">
            <div>
                <Container>
                    <Row>
                        <Col>
                            <img
                                src={shirt1}
                                height={100}
                                width={100}
                                alt={"Shirt 1"}
                                style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    fontSize: "20px"
                                }}
                            ></img>
                            <div>
                                <p>Total stock: {stock1}</p>
                                <Button onClick={() => setStock1(stock1 + 1)}>
                                    Add one to Stock
                                </Button>
                                <Button
                                    onClick={
                                        stock1 <= 0
                                            ? () => setStock1(stock1)
                                            : () => setStock1(stock1 - 1)
                                    }
                                >
                                    Remove one from Stock
                                </Button>
                            </div>
                        </Col>
                        <Col>
                            <img
                                src={shirt2}
                                height={100}
                                width={100}
                                alt={"Shirt 2"}
                                style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    fontSize: "20px"
                                }}
                            ></img>
                            <div>
                                <p>Total stock: {stock2}</p>
                                <Button onClick={() => setStock2(stock2 + 1)}>
                                    Add one to Stock
                                </Button>
                                <Button
                                    onClick={
                                        stock2 <= 0
                                            ? () => setStock2(stock2)
                                            : () => setStock2(stock2 - 1)
                                    }
                                >
                                    Remove one from Stock
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img
                                src={shirt3}
                                height={100}
                                width={100}
                                alt={"Shirt 3"}
                                style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    fontSize: "20px"
                                }}
                            ></img>
                            <div>
                                <p>Total stock: {stock3}</p>
                                <Button onClick={() => setStock3(stock3 + 1)}>
                                    Add one to Stock
                                </Button>
                                <Button
                                    onClick={
                                        stock3 <= 0
                                            ? () => setStock3(stock3)
                                            : () => setStock3(stock3 - 1)
                                    }
                                >
                                    Remove one from Stock
                                </Button>
                            </div>
                        </Col>
                        <Col>
                            <img
                                src={shirt4}
                                height={100}
                                width={100}
                                alt={"Shirt 4"}
                                style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    fontSize: "20px"
                                }}
                            ></img>
                            <div>
                                <p>Total stock: {stock4}</p>
                                <Button onClick={() => setStock4(stock4 + 1)}>
                                    Add one to Stock
                                </Button>
                                <Button
                                    onClick={
                                        stock4 <= 0
                                            ? () => setStock4(stock4)
                                            : () => setStock4(stock4 - 1)
                                    }
                                >
                                    Remove one from Stock
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img
                                src={shirt5}
                                height={100}
                                width={100}
                                alt={"Shirt 5"}
                                style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    fontSize: "20px"
                                }}
                            ></img>
                            <div>
                                <p>Total stock: {stock5}</p>
                                <Button onClick={() => setStock5(stock5 + 1)}>
                                    Add one to Stock
                                </Button>
                                <Button
                                    onClick={
                                        stock5 <= 0
                                            ? () => setStock5(stock5)
                                            : () => setStock5(stock5 - 1)
                                    }
                                >
                                    Remove one from Stock
                                </Button>
                            </div>
                        </Col>
                        <Col>
                            <img
                                src={shirt6}
                                height={100}
                                width={100}
                                alt={"Shirt 6"}
                                style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    fontSize: "20px"
                                }}
                            ></img>
                            <div>
                                <p>Total stock: {stock6}</p>
                                <Button onClick={() => setStock6(stock6 + 1)}>
                                    Add one to Stock
                                </Button>
                                <Button
                                    onClick={
                                        stock6 <= 0
                                            ? () => setStock6(stock6)
                                            : () => setStock6(stock6 - 1)
                                    }
                                >
                                    Remove one from Stock
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img
                                src={sweatshirt1}
                                height={100}
                                width={100}
                                alt={"Sweatshirt 1"}
                                style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    fontSize: "20px"
                                }}
                            ></img>
                            <div>
                                <p>Total stock: {sweatStock1}</p>
                                <Button
                                    onClick={() =>
                                        sweatSetStock1(sweatStock1 + 1)
                                    }
                                >
                                    Add one to Stock
                                </Button>
                                <Button
                                    onClick={
                                        sweatStock1 <= 0
                                            ? () => sweatSetStock1(sweatStock1)
                                            : () =>
                                                  sweatSetStock1(
                                                      sweatStock1 - 1
                                                  )
                                    }
                                >
                                    Remove one from Stock
                                </Button>
                            </div>
                        </Col>
                        <Col>
                            <img
                                src={sweatshirt2}
                                height={100}
                                width={100}
                                alt={"Sweatshirt 2"}
                                style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    fontSize: "20px"
                                }}
                            ></img>
                            <div>
                                <p>Total stock: {sweatStock2}</p>
                                <Button
                                    onClick={() =>
                                        sweatSetStock2(sweatStock2 + 1)
                                    }
                                >
                                    Add one to Stock
                                </Button>
                                <Button
                                    onClick={
                                        sweatStock2 <= 0
                                            ? () => sweatSetStock2(sweatStock2)
                                            : () =>
                                                  sweatSetStock2(
                                                      sweatStock2 - 1
                                                  )
                                    }
                                >
                                    Remove one from Stock
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img
                                src={sweatshirt3}
                                height={100}
                                width={100}
                                alt={"Sweatshirt 3"}
                                style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    fontSize: "20px"
                                }}
                            ></img>
                            <div>
                                <p>Total stock: {sweatStock3}</p>
                                <Button
                                    onClick={() =>
                                        sweatSetStock3(sweatStock3 + 1)
                                    }
                                >
                                    Add one to Stock
                                </Button>
                                <Button
                                    onClick={
                                        sweatStock3 <= 0
                                            ? () => sweatSetStock3(sweatStock3)
                                            : () =>
                                                  sweatSetStock3(
                                                      sweatStock3 - 1
                                                  )
                                    }
                                >
                                    Remove one from Stock
                                </Button>
                            </div>
                        </Col>
                        <Col>
                            <img
                                src={sweatshirt4}
                                height={100}
                                width={100}
                                alt={"Sweatshirt 4"}
                                style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    fontSize: "20px"
                                }}
                            ></img>
                            <div>
                                <p>Total stock: {sweatStock4}</p>
                                <Button
                                    onClick={() =>
                                        sweatSetStock4(sweatStock4 + 1)
                                    }
                                >
                                    Add one to Stock
                                </Button>
                                <Button
                                    onClick={
                                        sweatStock4 <= 0
                                            ? () => sweatSetStock4(sweatStock4)
                                            : () =>
                                                  sweatSetStock4(
                                                      sweatStock4 - 1
                                                  )
                                    }
                                >
                                    Remove one from Stock
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img
                                src={sweatshirt5}
                                height={100}
                                width={100}
                                alt={"Sweatshirt 5"}
                                style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    fontSize: "20px"
                                }}
                            ></img>
                            <div>
                                <p>Total stock: {sweatStock5}</p>
                                <Button
                                    onClick={() =>
                                        sweatSetStock5(sweatStock5 + 1)
                                    }
                                >
                                    Add one to Stock
                                </Button>
                                <Button
                                    onClick={
                                        sweatStock5 <= 0
                                            ? () => sweatSetStock5(sweatStock5)
                                            : () =>
                                                  sweatSetStock5(
                                                      sweatStock5 - 1
                                                  )
                                    }
                                >
                                    Remove one from Stock
                                </Button>
                            </div>
                        </Col>
                        <Col>
                            <img
                                src={sweatshirt6}
                                height={100}
                                width={100}
                                alt={"Sweatshirt 6"}
                                style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    fontSize: "20px"
                                }}
                            ></img>
                            <div>
                                <p>Total stock: {sweatStock6}</p>
                                <Button
                                    onClick={() =>
                                        sweatSetStock6(sweatStock6 + 1)
                                    }
                                >
                                    Add one to Stock
                                </Button>
                                <Button
                                    onClick={
                                        sweatStock6 <= 0
                                            ? () => sweatSetStock6(sweatStock6)
                                            : () =>
                                                  sweatSetStock6(
                                                      sweatStock6 - 1
                                                  )
                                    }
                                >
                                    Remove one from Stock
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default StockEditor;
