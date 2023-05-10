/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import NavBar from "./Navbar";
import { useShoppingCart } from "../context/ShoppingCartContext";
import formatMoney from "../utility/formatMoney";
import { prodM, prodW } from "./ProductList";
import { CheckoutItem } from "./CheckoutItem";
import { VStack, Stack, Divider } from "@chakra-ui/react";

const usStates: string[] = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
];
const expYears: number[] = [
    2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032
];
const expMonths: string[] = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12"
];

const CheckoutModal = () => {
    const { cartItems } = useShoppingCart();
    const [Fname, setFName] = useState("");
    const [Lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [addr1, setAddr1] = useState("");
    const [addr2, setAddr2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [cardNum, setCardNum] = useState("");

    function updateFName(event: React.ChangeEvent<HTMLInputElement>) {
        setFName(event.target.value);
    }
    function updateLastName(event: React.ChangeEvent<HTMLInputElement>) {
        setLName(event.target.value);
    }
    function updateEmail(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }
    function updateNumber(event: React.ChangeEvent<HTMLInputElement>) {
        setNumber(event.target.value);
    }
    function updateAddr1(event: React.ChangeEvent<HTMLInputElement>) {
        setAddr1(event.target.value);
    }
    function updateAddr2(event: React.ChangeEvent<HTMLInputElement>) {
        setAddr2(event.target.value);
    }
    function updateCity(event: React.ChangeEvent<HTMLInputElement>) {
        setCity(event.target.value);
    }
    function updateState(event: React.ChangeEvent<HTMLSelectElement>) {
        setState(event.target.value);
    }
    function updateZip(event: React.ChangeEvent<HTMLInputElement>) {
        setZip(event.target.value);
    }
    function updateCardNum(event: React.ChangeEvent<HTMLInputElement>) {
        setCardNum(event.target.value);
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Shipping Information</h4>
                                    {email}
                                    {Fname}
                                    {Lname}
                                    {number}
                                    {addr1}
                                    {addr2}
                                    {city}
                                    {state}
                                    {zip}
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <Form.Group controlId="formFName">
                                                    <Form.Label>
                                                        First Name
                                                    </Form.Label>
                                                    <Form.Control
                                                        value={Fname}
                                                        onChange={updateFName}
                                                    ></Form.Control>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <Form.Group controlId="formLName">
                                                    <Form.Label>
                                                        Last Name
                                                    </Form.Label>
                                                    <Form.Control
                                                        value={Lname}
                                                        onChange={
                                                            updateLastName
                                                        }
                                                    ></Form.Control>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <Form.Group controlId="formEmail">
                                                    <Form.Label>
                                                        Email Address
                                                    </Form.Label>
                                                    <Form.Control
                                                        value={email}
                                                        onChange={updateEmail}
                                                    ></Form.Control>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <Form.Group controlId="formNumber">
                                                    <Form.Label>
                                                        Phone Number
                                                    </Form.Label>
                                                    <Form.Control
                                                        value={number}
                                                        onChange={updateNumber}
                                                    ></Form.Control>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group controlId="formAddr1">
                                                <Form.Label>
                                                    Address Line 1
                                                </Form.Label>
                                                <Form.Control
                                                    value={addr1}
                                                    onChange={updateAddr1}
                                                ></Form.Control>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <Form.Group controlId="formAddr1">
                                                    <Form.Label>
                                                        Address Line 2
                                                    </Form.Label>
                                                    <Form.Control
                                                        value={addr2}
                                                        onChange={updateAddr2}
                                                    ></Form.Control>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <Form.Group controlId="formAddr1">
                                                    <Form.Label>
                                                        City
                                                    </Form.Label>
                                                    <Form.Control
                                                        value={city}
                                                        onChange={updateCity}
                                                    ></Form.Control>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <div>
                                                    <Form.Group controlId="userEmotions">
                                                        <Form.Label>
                                                            State
                                                        </Form.Label>
                                                        <Form.Select
                                                            className="col-md-4"
                                                            value={state}
                                                            onChange={
                                                                updateState
                                                            }
                                                        >
                                                            {usStates.map(
                                                                (state) => (
                                                                    <option
                                                                        key={
                                                                            state
                                                                        }
                                                                        value={
                                                                            state
                                                                        }
                                                                    >
                                                                        {state}
                                                                    </option>
                                                                )
                                                            )}
                                                        </Form.Select>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <Form.Group controlId="formAddr1">
                                                    <Form.Label>
                                                        Zipcode
                                                    </Form.Label>
                                                    <Form.Control
                                                        value={zip}
                                                        onChange={updateZip}
                                                    ></Form.Control>
                                                </Form.Group>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Payment Details</h4>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6"></div>
                                    </div>
                                    <div className="col-md-14">
                                        <div className="form-group mb-3">
                                            <Form.Group>
                                                <Form.Label>
                                                    Cardholder Name
                                                </Form.Label>
                                                <Form.Control></Form.Control>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="col-md-14">
                                        <div className="form-group mb-3">
                                            <Form.Group>
                                                <Form.Label>
                                                    Card Number
                                                </Form.Label>
                                                <Form.Control
                                                    value={cardNum}
                                                    onChange={updateCardNum}
                                                ></Form.Control>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div>
                                            <Form.Group>
                                                <Form.Label>
                                                    Security Code
                                                </Form.Label>
                                                <Form.Control></Form.Control>
                                                <Form.Label>
                                                    Expiration Month
                                                </Form.Label>
                                                <Form.Select>
                                                    {expMonths.map((month) => (
                                                        <option
                                                            key={month}
                                                            value={month}
                                                        >
                                                            {month}
                                                        </option>
                                                    ))}
                                                </Form.Select>
                                                <Form.Label>
                                                    Expiration Year
                                                </Form.Label>
                                                <Form.Select>
                                                    {expYears.map((year) => (
                                                        <option
                                                            key={year}
                                                            value={year}
                                                        >
                                                            {year}
                                                        </option>
                                                    ))}
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Order Details</h4>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Stack gap={3}>
                                                <VStack padding={10} rowGap={5}>
                                                    {cartItems.map((item) => (
                                                        <CheckoutItem
                                                            key={item.name}
                                                            {...item}
                                                        />
                                                    ))}
                                                    <div className="ms-auto fw-bold fs-6">
                                                        <Divider orientation="vertical" />
                                                        Total:&nbsp;
                                                        {formatMoney(
                                                            cartItems.reduce(
                                                                (
                                                                    total,
                                                                    cartItem
                                                                ) => {
                                                                    let item =
                                                                        prodM.find(
                                                                            (
                                                                                item
                                                                            ) =>
                                                                                item.name ===
                                                                                cartItem.name
                                                                        );
                                                                    if (
                                                                        item ==
                                                                        null
                                                                    ) {
                                                                        item =
                                                                            prodW.find(
                                                                                (
                                                                                    item
                                                                                ) =>
                                                                                    item.name ===
                                                                                    cartItem.name
                                                                            );
                                                                    }
                                                                    return (
                                                                        total +
                                                                        (item?.price ||
                                                                            0) *
                                                                            cartItem.quantity
                                                                    );
                                                                },
                                                                0
                                                            )
                                                        )}
                                                    </div>
                                                </VStack>
                                            </Stack>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutModal;
