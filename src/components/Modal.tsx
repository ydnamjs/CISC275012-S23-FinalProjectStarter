/* eslint-disable no-extra-parens */
import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import PaymentInformation from "./PaymentInformation";
import OrderConfirmation from "./pages/OrderConfirmation";
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Select
} from "@chakra-ui/react";

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

<<<<<<< HEAD
type StateProps = {
    Fname: string;
    Lname: string;
};

function CheckoutModal() {
    const [Fname, setFName] = useState<string>("");
    const [Lname, setLName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [addr1, setAddr1] = useState<string>("");
    const [addr2, setAddr2] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [zip, setZip] = useState<string>("");
=======
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
>>>>>>> 731f9b32b423e0a357ee8d0ee5c9544ae5af08df

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
    };

    return (
        <div>
            <NavBar></NavBar>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <div className="py-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Shipping Information</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
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
                                                                setFName(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        ></Input>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
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
                                                                setLName(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        ></Input>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <FormLabel>
                                                            Email Address
                                                        </FormLabel>
                                                        <Input
                                                            type="text"
                                                            id="Email"
                                                            ref={userRef}
                                                            required
                                                            aria-describedby="Emailnote"
                                                            value={email}
                                                            onChange={(e) =>
                                                                setEmail(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        ></Input>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <FormLabel>
                                                            Phone Number
                                                        </FormLabel>
                                                        <Input
                                                            type="text"
                                                            id="Number"
                                                            ref={userRef}
                                                            required
                                                            aria-describedby="Numbernote"
                                                            value={number}
                                                            onChange={(e) =>
                                                                setNumber(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        ></Input>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <FormLabel>
                                                        Address Line 1
                                                    </FormLabel>
                                                    <Input
                                                        type="text"
                                                        id="Addresss1"
                                                        ref={userRef}
                                                        required
                                                        aria-describedby="Addr1note"
                                                        value={addr1}
                                                        onChange={(e) =>
                                                            setAddr1(
                                                                e.target.value
                                                            )
                                                        }
                                                    ></Input>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <FormLabel>
                                                            Address Line 2
                                                        </FormLabel>
                                                        <Input
                                                            type="text"
                                                            id="Address2"
                                                            ref={userRef}
                                                            required
                                                            aria-describedby="Addr2note"
                                                            value={addr2}
                                                            onChange={(e) =>
                                                                setAddr2(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        ></Input>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <FormLabel>
                                                            City
                                                        </FormLabel>
                                                        <Input
                                                            type="text"
                                                            id="City"
                                                            ref={userRef}
                                                            required
                                                            aria-describedby="Citynote"
                                                            value={city}
                                                            onChange={(e) =>
                                                                setCity(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        ></Input>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <div>
                                                            <FormLabel>
                                                                State
                                                            </FormLabel>
                                                            <Select
                                                                id="State"
                                                                required
                                                                aria-describedby="Statenote"
                                                                className="col-md-4"
                                                                value={state}
                                                                onChange={(e) =>
                                                                    setState(
                                                                        e.target
                                                                            .value
                                                                    )
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
                                                                            {
                                                                                state
                                                                            }
                                                                        </option>
                                                                    )
                                                                )}
                                                            </Select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <FormLabel>
                                                            Zipcode
                                                        </FormLabel>
                                                        <Input
                                                            type="text"
                                                            id="Zip"
                                                            ref={userRef}
                                                            required
                                                            aria-describedby="Zipnote"
                                                            value={zip}
                                                            onChange={(e) =>
                                                                setZip(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        ></Input>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FormControl>
                <Button type="submit">Confirm</Button>
            </form>
            <PaymentInformation></PaymentInformation>
            <OrderConfirmation />
        </div>
    );
}

export default CheckoutModal;
