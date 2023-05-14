/* eslint-disable indent */
import { Dispatch, SetStateAction } from "react";
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
import React from "react";

function CartDisplay({
    shirtCart1,
    setShirtCart1,
    shirtCart2,
    setShirtCart2,
    shirtCart3,
    setShirtCart3,
    shirtCart4,
    setShirtCart4,
    shirtCart5,
    setShirtCart5,
    shirtCart6,
    setShirtCart6,
    sweatCart1,
    sweatSetCart1,
    sweatCart2,
    sweatSetCart2,
    sweatCart3,
    sweatSetCart3,
    sweatCart4,
    sweatSetCart4,
    sweatCart5,
    sweatSetCart5,
    sweatCart6,
    sweatSetCart6,
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
    shirtCart1: number;
    setShirtCart1: Dispatch<SetStateAction<number>>;
    shirtCart2: number;
    setShirtCart2: Dispatch<SetStateAction<number>>;
    shirtCart3: number;
    setShirtCart3: Dispatch<SetStateAction<number>>;
    shirtCart4: number;
    setShirtCart4: Dispatch<SetStateAction<number>>;
    shirtCart5: number;
    setShirtCart5: Dispatch<SetStateAction<number>>;
    shirtCart6: number;
    setShirtCart6: Dispatch<SetStateAction<number>>;
    sweatCart1: number;
    sweatSetCart1: Dispatch<SetStateAction<number>>;
    sweatCart2: number;
    sweatSetCart2: Dispatch<SetStateAction<number>>;
    sweatCart3: number;
    sweatSetCart3: Dispatch<SetStateAction<number>>;
    sweatCart4: number;
    sweatSetCart4: Dispatch<SetStateAction<number>>;
    sweatCart5: number;
    sweatSetCart5: Dispatch<SetStateAction<number>>;
    sweatCart6: number;
    sweatSetCart6: Dispatch<SetStateAction<number>>;
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
        <div className="CartDisplay">
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
                                <p>Quantity: {shirtCart1}</p>
                                <Button
                                    onClick={
                                        stock1 > 0
                                            ? () => {
                                                  setShirtCart1(shirtCart1 + 1);
                                                  setStock1(stock1 - 1);
                                              }
                                            : () => setShirtCart1(shirtCart1)
                                    }
                                >
                                    Add one to Cart
                                </Button>
                                <Button
                                    onClick={
                                        shirtCart1 <= 0
                                            ? () => setShirtCart1(shirtCart1)
                                            : () => {
                                                  setShirtCart1(shirtCart1 - 1);
                                                  setStock1(stock1 + 1);
                                              }
                                    }
                                >
                                    Remove one from Cart
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
                                <p>Quantity: {shirtCart2}</p>

                                <Button
                                    onClick={
                                        stock2 > 0
                                            ? () => {
                                                  setShirtCart2(shirtCart2 + 1);
                                                  setStock2(stock2 - 1);
                                              }
                                            : () => setShirtCart2(shirtCart2)
                                    }
                                >
                                    Add one to Cart
                                </Button>
                                <Button
                                    onClick={
                                        shirtCart2 <= 0
                                            ? () => setShirtCart2(shirtCart2)
                                            : () => {
                                                  setShirtCart2(shirtCart2 - 1);
                                                  setStock2(stock2 + 1);
                                              }
                                    }
                                >
                                    Remove one from Cart
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
                                <p>Quantity: {shirtCart3}</p>
                                <Button
                                    onClick={
                                        stock3 > 0
                                            ? () => {
                                                  setShirtCart3(shirtCart3 + 1);
                                                  setStock3(stock3 - 1);
                                              }
                                            : () => setShirtCart3(shirtCart3)
                                    }
                                >
                                    Add one to Cart
                                </Button>
                                <Button
                                    onClick={
                                        shirtCart3 <= 0
                                            ? () => setShirtCart3(shirtCart3)
                                            : () => {
                                                  setShirtCart3(shirtCart3 - 1);
                                                  setStock3(stock3 + 1);
                                              }
                                    }
                                >
                                    Remove one from Cart
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
                                <p>Quantity: {shirtCart4}</p>
                                <Button
                                    onClick={
                                        stock4 > 0
                                            ? () => {
                                                  setShirtCart4(shirtCart4 + 1);
                                                  setStock4(stock4 - 1);
                                              }
                                            : () => setShirtCart4(shirtCart4)
                                    }
                                >
                                    Add one to Cart
                                </Button>
                                <Button
                                    onClick={
                                        shirtCart4 <= 0
                                            ? () => setShirtCart4(shirtCart4)
                                            : () => {
                                                  setShirtCart4(shirtCart4 - 1);
                                                  setStock4(stock4 + 1);
                                              }
                                    }
                                >
                                    Remove one from Cart
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
                                <p>Quantity: {shirtCart5}</p>
                                <Button
                                    onClick={
                                        stock5 > 0
                                            ? () => {
                                                  setShirtCart5(shirtCart5 + 1);
                                                  setStock5(stock5 - 1);
                                              }
                                            : () => setShirtCart5(shirtCart5)
                                    }
                                >
                                    Add one to Cart
                                </Button>
                                <Button
                                    onClick={
                                        shirtCart5 <= 0
                                            ? () => setShirtCart5(shirtCart5)
                                            : () => {
                                                  setShirtCart5(shirtCart5 - 1);
                                                  setStock5(stock5 + 1);
                                              }
                                    }
                                >
                                    Remove one from Cart
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
                                <p>Quantity: {shirtCart6}</p>
                                <Button
                                    onClick={
                                        stock6 > 0
                                            ? () => {
                                                  setShirtCart6(shirtCart6 + 1);
                                                  setStock6(stock6 - 1);
                                              }
                                            : () => setShirtCart6(shirtCart6)
                                    }
                                >
                                    Add one to Cart
                                </Button>
                                <Button
                                    onClick={
                                        shirtCart6 <= 0
                                            ? () => setShirtCart6(shirtCart6)
                                            : () => {
                                                  setShirtCart6(shirtCart6 - 1);
                                                  setStock6(stock6 + 1);
                                              }
                                    }
                                >
                                    Remove one from Cart
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
                                <p>Quantity: {sweatCart1}</p>
                                <Button
                                    onClick={
                                        sweatStock1 > 0
                                            ? () => {
                                                  sweatSetCart1(sweatCart1 + 1);
                                                  sweatSetStock1(
                                                      sweatStock1 - 1
                                                  );
                                              }
                                            : () => sweatSetCart1(sweatCart1)
                                    }
                                >
                                    Add one to Cart
                                </Button>
                                <Button
                                    onClick={
                                        sweatCart1 <= 0
                                            ? () => sweatSetCart1(sweatCart1)
                                            : () => {
                                                  sweatSetCart1(sweatCart1 - 1);
                                                  sweatSetStock1(
                                                      sweatStock1 + 1
                                                  );
                                              }
                                    }
                                >
                                    Remove one from Cart
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
                                <p>Quantity: {sweatCart2}</p>
                                <Button
                                    onClick={
                                        sweatStock2 > 0
                                            ? () => {
                                                  sweatSetCart2(sweatCart2 + 1);
                                                  sweatSetStock2(
                                                      sweatStock2 - 1
                                                  );
                                              }
                                            : () => sweatSetCart2(sweatCart2)
                                    }
                                >
                                    Add one to Cart
                                </Button>
                                <Button
                                    onClick={
                                        sweatCart2 <= 0
                                            ? () => sweatSetCart2(sweatCart2)
                                            : () => {
                                                  sweatSetCart2(sweatCart2 - 1);
                                                  sweatSetStock2(
                                                      sweatStock2 + 1
                                                  );
                                              }
                                    }
                                >
                                    Remove one from Cart
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
                                <p>Quantity: {sweatCart3}</p>
                                <Button
                                    onClick={
                                        sweatStock3 > 0
                                            ? () => {
                                                  sweatSetCart3(sweatCart3 + 1);
                                                  sweatSetStock3(
                                                      sweatStock3 - 1
                                                  );
                                              }
                                            : () => sweatSetCart3(sweatCart3)
                                    }
                                >
                                    Add one to Cart
                                </Button>
                                <Button
                                    onClick={
                                        sweatCart3 <= 0
                                            ? () => sweatSetCart3(sweatCart3)
                                            : () => {
                                                  sweatSetCart3(sweatCart3 - 1);
                                                  sweatSetStock3(
                                                      sweatStock3 + 1
                                                  );
                                              }
                                    }
                                >
                                    Remove one from Cart
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
                                <p>Quantity: {sweatCart4}</p>
                                <Button
                                    onClick={
                                        sweatStock4 > 0
                                            ? () => {
                                                  sweatSetCart4(sweatCart4 + 1);
                                                  sweatSetStock4(
                                                      sweatStock4 - 1
                                                  );
                                              }
                                            : () => sweatSetCart4(sweatCart4)
                                    }
                                >
                                    Add one to Cart
                                </Button>
                                <Button
                                    onClick={
                                        sweatCart1 <= 0
                                            ? () => sweatSetCart4(sweatCart4)
                                            : () => {
                                                  sweatSetCart4(sweatCart4 - 1);
                                                  sweatSetStock4(
                                                      sweatStock4 + 1
                                                  );
                                              }
                                    }
                                >
                                    Remove one from Cart
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
                                <p>Quantity: {sweatCart5}</p>
                                <Button
                                    onClick={
                                        sweatStock5 > 0
                                            ? () => {
                                                  sweatSetCart5(sweatCart5 + 1);
                                                  sweatSetStock5(
                                                      sweatStock5 - 1
                                                  );
                                              }
                                            : () => sweatSetCart5(sweatCart5)
                                    }
                                >
                                    Add one to Cart
                                </Button>
                                <Button
                                    onClick={
                                        sweatCart5 <= 0
                                            ? () => sweatSetCart5(sweatCart5)
                                            : () => {
                                                  sweatSetCart5(sweatCart5 - 1);
                                                  sweatSetStock5(
                                                      sweatStock5 + 1
                                                  );
                                              }
                                    }
                                >
                                    Remove one from Cart
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
                                <p>Quantity: {sweatCart6}</p>
                                <Button
                                    onClick={
                                        sweatStock6 > 0
                                            ? () => {
                                                  sweatSetCart6(sweatCart6 + 1);
                                                  sweatSetStock6(
                                                      sweatStock6 - 1
                                                  );
                                              }
                                            : () => sweatSetCart6(sweatCart6)
                                    }
                                >
                                    Add one to Cart
                                </Button>
                                <Button
                                    onClick={
                                        sweatCart6 <= 0
                                            ? () => sweatSetCart6(sweatCart6)
                                            : () => {
                                                  sweatSetCart6(sweatCart6 - 1);
                                                  sweatSetStock6(
                                                      sweatStock6 + 1
                                                  );
                                              }
                                    }
                                >
                                    Remove one from Cart
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <p>
                        Total:{"$ "}
                        {shirtCart1 * 15 +
                            shirtCart2 * 15 +
                            shirtCart3 * 15 +
                            shirtCart4 * 15 +
                            shirtCart5 * 15 +
                            shirtCart6 * 15 +
                            sweatCart1 * 30 +
                            sweatCart2 * 30 +
                            sweatCart3 * 30 +
                            sweatCart4 * 30 +
                            sweatCart5 * 30 +
                            sweatCart6 * 30}
                    </p>
                </Container>
            </div>
        </div>
    );
}

export default CartDisplay;
