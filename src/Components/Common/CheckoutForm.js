/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
export default function BasicTextFields({
    title,
    setEmail,
    setFirstName,
    setLastName,
    setAddress
    //handleAction
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
                    id="first name"
                    label="Enter your first name"
                    variant="outlined"
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                    id="email"
                    label="Enter your Email"
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    id="last name"
                    label="Enter your last name"
                    variant="outlined"
                    onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                    id="address"
                    label="Enter your Address"
                    variant="outlined"
                    onChange={(e) => setAddress(e.target.value)}
                />
            </Box>
        </div>
    );
}
