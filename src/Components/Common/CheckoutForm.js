/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
export default function BasicTextFields({
    title,
    setEmail,
    setNameOrder,
    setPaymentInfo,
    setAddress
}) {
    return (
        <div>
            <div className="heading-container">
                <h3>{title} Form</h3>
            </div>

            <Box
                component="form"
                sx={{
                    "& > :not(style)": { m: 1, width: "25ch" }
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="Name"
                    label="Enter your name"
                    variant="outlined"
                    onChange={(e) => setNameOrder(e.target.value)}
                />
                <TextField
                    id="email"
                    label="Enter your Email"
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    id="address"
                    label="Enter your Address"
                    variant="outlined"
                    onChange={(e) => setAddress(e.target.value)}
                />
                <TextField
                    id="payment info"
                    label="Enter your payment info"
                    variant="outlined"
                    onChange={(e) => setPaymentInfo(e.target.value)}
                />
            </Box>
        </div>
    );
}
