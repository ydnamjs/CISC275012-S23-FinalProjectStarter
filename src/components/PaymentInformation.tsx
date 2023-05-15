import React, { useState } from "react";
import { Form } from "react-bootstrap";

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
    const [cardNum, setCardNum] = useState("");
    function updateCardNum(event: React.ChangeEvent<HTMLInputElement>) {
        setCardNum(event.target.value);
    }
    return (
        <div>
            <div className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
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
        </div>
    );
};
export default PaymentInformation;
