/* eslint-disable react/prop-types */
import * as React from "react";
import Button from "@mui/material/Button";

export default function BasicButtons({ title, handleAction }) {
    return (
        <Button
            variant="contained"
            onClick={handleAction}
            data-testid="login-button"
        >
            {title}
        </Button>
    );
}
