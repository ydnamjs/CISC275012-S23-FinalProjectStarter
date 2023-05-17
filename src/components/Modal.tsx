/* eslint-disable no-extra-parens */
import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import PaymentInformation from "./PaymentInformation";
import { Link } from "react-router-dom";

import {
    Button,
    Center,
    FormControl,
    FormLabel,
    Input,
    Select,
    Text,
    SimpleGrid,
    Card,
    CardBody,
    Stack,
    StackDivider
} from "@chakra-ui/react";

const usStates: string[] = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY"
];

const shippingMethods: string[] = [
    "U.S. Standard (5-7 business days): $7.95",
    "U.S. Expedited (1 Day): $14.95"
];
export function CheckoutModal() {
    const userRef = React.useRef<HTMLInputElement>(null);
    const [Fname, setFName] = useState("");
    const [Lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [addr1, setAddr1] = useState("");
    const [addr2, setAddr2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [shipping, setShipping] = useState(
        "U.S. Standard (5-7 business days): $7.95"
    );
    const [confirm, setConfirmation] = useState(false);

    useEffect(() => {
        if (userRef.current != null) {
            userRef.current.focus();
        }
    }, []);

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        localStorage.setItem("FirstName", Fname);
        localStorage.setItem("LastName", Lname);
        localStorage.setItem("Email", email);
        localStorage.setItem("Number", number);
        localStorage.setItem("Address1", addr1);
        localStorage.setItem("Address2", addr2);
        localStorage.setItem("City", city);
        localStorage.setItem("State", state);
        localStorage.setItem("Zip", zip);
        localStorage.setItem("Shipping", shipping);
    };

    return (
        <div>
            <NavBar></NavBar>
            <form onSubmit={handleSubmit}>
                <Card>
                    <CardBody>
                        <FormControl>
                            <Center>
                                <Text as="b" fontSize="4xl">
                                    Shipping Information
                                </Text>
                            </Center>
                            <SimpleGrid columns={3} spacing={5} padding={5}>
                                <Card>
                                    <CardBody>
                                        <FormLabel htmlFor="FirstName">
                                            First Name
                                        </FormLabel>
                                        <Input
                                            type="text"
                                            id="FirstName"
                                            ref={userRef}
                                            required
                                            aria-describedby="fnamenote"
                                            onChange={(e) =>
                                                setFName(e.target.value)
                                            }
                                        ></Input>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardBody>
                                        <FormLabel htmlFor="LastName">
                                            Last Name
                                        </FormLabel>
                                        <Input
                                            type="text"
                                            id="LastName"
                                            ref={userRef}
                                            required
                                            aria-describedby="Lnamenote"
                                            value={Lname}
                                            onChange={(e) =>
                                                setLName(e.target.value)
                                            }
                                        ></Input>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardBody>
                                        <FormLabel>Email Address</FormLabel>
                                        <Input
                                            type="text"
                                            id="Email"
                                            ref={userRef}
                                            required
                                            aria-describedby="Emailnote"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        ></Input>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardBody>
                                        <FormLabel>Phone Number</FormLabel>
                                        <Input
                                            type="text"
                                            id="Number"
                                            ref={userRef}
                                            required
                                            aria-describedby="Numbernote"
                                            value={number}
                                            onChange={(e) =>
                                                setNumber(e.target.value)
                                            }
                                        ></Input>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardBody>
                                        <FormLabel>Address Line 1</FormLabel>
                                        <Input
                                            type="text"
                                            id="Addresss1"
                                            ref={userRef}
                                            required
                                            aria-describedby="Addr1note"
                                            value={addr1}
                                            onChange={(e) =>
                                                setAddr1(e.target.value)
                                            }
                                        ></Input>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardBody>
                                        <FormLabel>Address Line 2</FormLabel>
                                        <Input
                                            type="text"
                                            id="Address2"
                                            ref={userRef}
                                            aria-describedby="Addr2note"
                                            value={addr2}
                                            onChange={(e) =>
                                                setAddr2(e.target.value)
                                            }
                                        ></Input>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardBody>
                                        <FormLabel>City</FormLabel>
                                        <Input
                                            type="text"
                                            id="City"
                                            ref={userRef}
                                            required
                                            aria-describedby="Citynote"
                                            value={city}
                                            onChange={(e) =>
                                                setCity(e.target.value)
                                            }
                                        ></Input>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardBody>
                                        <FormLabel>State</FormLabel>
                                        <Select
                                            id="State"
                                            required
                                            aria-describedby="Statenote"
                                            className="col-md-4"
                                            value={state}
                                            onChange={(e) =>
                                                setState(e.target.value)
                                            }
                                        >
                                            {usStates.map((state) => (
                                                <option
                                                    key={state}
                                                    value={state}
                                                >
                                                    {state}
                                                </option>
                                            ))}
                                        </Select>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardBody>
                                        <FormLabel>Zipcode</FormLabel>
                                        <Input
                                            type="text"
                                            id="Zip"
                                            ref={userRef}
                                            required
                                            aria-describedby="Zipnote"
                                            value={zip}
                                            onChange={(e) =>
                                                setZip(e.target.value)
                                            }
                                        ></Input>
                                    </CardBody>
                                </Card>
                            </SimpleGrid>
                            <Center>
                                <Stack width={585}>
                                    <Card>
                                        <CardBody>
                                            <FormLabel>Shipping</FormLabel>
                                            <Select
                                                id="Shipping"
                                                required
                                                aria-describedby="ShippingNote"
                                                className="col-md-4"
                                                value={shipping}
                                                onChange={(e) =>
                                                    setShipping(e.target.value)
                                                }
                                            >
                                                {shippingMethods.map(
                                                    (method) => (
                                                        <option
                                                            key={method}
                                                            value={method}
                                                        >
                                                            {method}
                                                        </option>
                                                    )
                                                )}
                                            </Select>
                                        </CardBody>
                                    </Card>
                                </Stack>
                            </Center>
                        </FormControl>
                        <br />
                        <Center>
                            <Button
                                type="submit"
                                onClick={() => setConfirmation(!confirm)}
                            >
                                {confirm ? (
                                    <div>Confirmed!</div>
                                ) : (
                                    <div>Confirm details!</div>
                                )}
                            </Button>
                        </Center>
                    </CardBody>
                </Card>
            </form>
            <Card>
                <CardBody>
                    <PaymentInformation></PaymentInformation>
                </CardBody>
            </Card>
            <Stack>
                <StackDivider borderColor="gray.200" />
            </Stack>
            <br />
            <Center>
                <Link to="/confirmation">
                    <Button>Place Order</Button>
                </Link>
            </Center>
        </div>
    );
}

export default CheckoutModal;
