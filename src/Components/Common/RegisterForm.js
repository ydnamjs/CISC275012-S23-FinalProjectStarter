/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "./Button";
export default function BasicTextFields({
    title,
    setPassword,
    setEmail,
    setUsername,
    setAddress,
    handleAction
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
                    id="username"
                    label="Enter your Name"
                    variant="outlined"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    id="email"
                    label="Enter your Email"
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    id="password"
                    label="Enter your Password"
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    id="address"
                    label="Enter your Address"
                    variant="outlined"
                    onChange={(e) => setAddress(e.target.value)}
                />
            </Box>

            <Button title={title} handleAction={handleAction} />
        </div>
    );
}
