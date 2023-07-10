import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function LightMode(): JSX.Element {
    const [light, setLight] = useState<boolean>(false);

    function flipMode(): void {
        setLight(!light);
    }
    return (
        <Button
            onClick={flipMode}
            style={{
                height: "5rem",
                width: "5rem",
                position: "relative",
                left: "40rem",
                bottom: "35rem",
                backgroundColor: "#f6f2ee",
                border: "#f6f2e",
                fontSize: "2em"
            }}
        >
            🔆
        </Button>
    );
}
