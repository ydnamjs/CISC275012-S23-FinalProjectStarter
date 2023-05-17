/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import {
    FormControl,
    Input,
    Select,
    FormLabel,
    Button,
    Text,
    SimpleGrid,
    Card,
    CardBody,
    Center
} from "@chakra-ui/react";

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

const PaymentInformation = () => {
    const userRef = React.useRef<HTMLInputElement>(null);
    const [name, setName] = useState("");
    const [cardNum, setCardNum] = useState("");
    const [security, setSecurity] = useState("");
    const [expMonth, setExpMonth] = useState("");
    const [expYear, setExpYear] = useState("");
    const [confirm, setConfirmation] = useState(false);

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        localStorage.setItem("Name", name);
        localStorage.setItem("CardNum", cardNum);
        localStorage.setItem("SecurityNum", security);
        localStorage.setItem("ExpirationMonth", expMonth);
        localStorage.setItem("ExpirationYear", expYear);
    };
    return (
        <div>
            <Center>
                <Text as="b" fontSize="4xl">
                    Payment Details
                </Text>
            </Center>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <SimpleGrid columns={2} spacing={30} padding={5}>
                        <Card>
                            <CardBody>
                                <FormLabel>Cardholder Name</FormLabel>
                                <Input
                                    type="text"
                                    id="Name"
                                    ref={userRef}
                                    required
                                    aria-describedby="Namenote"
                                    onChange={(e) => setName(e.target.value)}
                                ></Input>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <FormLabel>Card Number</FormLabel>
                                <Input
                                    type="text"
                                    id="CardNum"
                                    ref={userRef}
                                    required
                                    aria-describedby="CardNumnote"
                                    onChange={(e) => setCardNum(e.target.value)}
                                ></Input>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                    <Center>
                        <SimpleGrid columns={3} spacing={5} padding={5}>
                            <Card>
                                <CardBody>
                                    <FormLabel>Security Code</FormLabel>
                                    <Input
                                        type="text"
                                        id="Security"
                                        ref={userRef}
                                        required
                                        aria-describedby="Securitynote"
                                        onChange={(e) =>
                                            setSecurity(e.target.value)
                                        }
                                    ></Input>
                                </CardBody>
                            </Card>
                            <Card width={300}>
                                <CardBody>
                                    <FormLabel>Expiration Month</FormLabel>
                                    <Select
                                        id="ExpirationMonth"
                                        required
                                        aria-describedby="ExpMonthnote"
                                        onChange={(e) =>
                                            setExpMonth(e.target.value)
                                        }
                                    >
                                        {expMonths.map((month) => (
                                            <option key={month} value={month}>
                                                {month}
                                            </option>
                                        ))}
                                    </Select>
                                </CardBody>
                            </Card>
                            <Card width={300}>
                                <CardBody>
                                    <FormLabel>Expiration Year</FormLabel>
                                    <Select
                                        id="ExpirationYear"
                                        required
                                        aria-describedby="ExpYearnote"
                                        onChange={(e) =>
                                            setExpYear(e.target.value)
                                        }
                                    >
                                        {expYears.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </Select>
                                </CardBody>
                            </Card>
                        </SimpleGrid>
                    </Center>
                </FormControl>
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
            </form>
        </div>
    );
};
export default PaymentInformation;
